import Button from "../../components/frontend/form_elements/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { APIENDPOINT } from "../../utils/baseURLs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginFormInputType } from "../../types/Types";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
import { UserContext } from "../../context/UserContext";

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const signIn = useSignIn();
  const userInfo = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (
    formData: LoginFormInputType,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    setLoading(true);
    event.preventDefault();
    const { email } = formData;
    try {
      const response = await axios.post(`${APIENDPOINT}api/login`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response.data);
      if (response.data.success) {
        /**
         * I used react-auth-kit for authentication.
         * it sends cookie token with each request to the server
         * it has expiration date in the client side
         *
         * I used userContext to share the user info across components
         */

        signIn({
          token: response.data?.token,
          expiresIn: 3600, // 1 hour
          tokenType: "Bearer", // default token type of jwt
          authState: { email },
        });
        userInfo.setUser({ name: response.data?.name, email }); // update UserContext
        navigate("/dashboard");
      } else {
        console.log(response.statusText);
        setErr(response.statusText);
      }
    } catch (error) {
      if (error && error instanceof AxiosError) {
        // The client was given an error response (5xx, 4xx)
        setErr(error.response?.data?.message);
        console.log(error.response?.data?.message);
      } else if (error && error instanceof Error) {
        setErr(error.message);
        console.log(error.message);
      } else {
        // The client never received a response, and the request was never left
        setErr("Error Occured on the server, please check them out");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="signin-wrapper">
        <div className="signin-container">
          <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
            <h5>Sign in</h5>
            <div className="error">{err && err}</div>

            <div className="input-group">
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                })}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: { value: 6, message: "at least 6 characters" },
                })}
              />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </div>

            <Button type="submit" disabled={loading} className="signin-btn">
              {loading ? "Loading..." : "Sign In"}
            </Button>
            <Link to="/register" className="m-t-20">
              Sign Up
            </Link>
            <Link to="#" className="m-t-10">
              Forgot your password?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
