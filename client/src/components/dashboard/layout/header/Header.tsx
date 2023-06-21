import { useContext } from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router";
import { UserContext } from "../../../../context/UserContext";

const Header: React.FC<{}> = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const userInfo = useContext(UserContext);
  const logout = () => {
    signOut();
    userInfo.setUser({ name: null, email: null })
    navigate("/login");
  };

  return (
    <nav>
      <i className="bx bx-menu toggle-sidebar" />
      <div className="form">
        <div className="form-group">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search icon" />
        </div>
      </div>

      <div className="profile">
        Welcome: {userInfo.user ?.name}
      </div>

      <button className="btn btn-secondary float-right" onClick={logout}>
        <i className="fa fa-sign-out" /> Logout
      </button>
    </nav>
  );
};
export default Header;
