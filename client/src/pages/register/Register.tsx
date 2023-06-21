import Button from "../../components/frontend/form_elements/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterFormInputType } from "../../types/Types";
import axios from "axios";
import { APIENDPOINT } from "../../utils/baseURLs";
const Register: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (
    data: RegisterFormInputType,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    event.preventDefault();
    const { name, email, password } = data;
    try {
      let response = await axios.post(`${APIENDPOINT}api/register`, {
        name,
        email,
        password,
      });
      if (response.data.status === 201) {
        toastify("Registeration successfully done, please signin");
        // after 3 second should navigate to login  page
        let timer = setTimeout(() => {
          navigate("/login");
        }, 3000);
        return () => {
          clearTimeout(timer);
        };
      } else {
        setErr(response.statusText);
      }
    } catch (error) {
      if (error.response) {
        // The client was given an error response (5xx, 4xx)
        setErr(error.response.data.message);
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
      <div className="singup-wrapper">
        <div className="signup-container">
          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <h5>Sign Up </h5>
            <div className="error">{err && err}</div>

            <div className="input-group">
              <input
                type="name"
                placeholder="name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              {errors.name && (
                <span className="error">{errors.name.message}</span>
              )}
            </div>

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

            <Button type="submit" disabled={loading} className="signup-btn">
              {loading ? "Loading ..." : "Sign Up"}
            </Button>
            <Link to="/login" className="m-t-20">
              Sign In
            </Link>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
export default Register;

function toastify(msg = "inserted") {
  toast.success(msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
