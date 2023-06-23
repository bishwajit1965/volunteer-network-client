import { Link } from "react-router-dom";
import Logo from "../../../../assets/logos/Group 1329.png";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavBar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="Logo-image" className="w-full h-10" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Donation</Link>
          </li>
          <li>
            <Link to="add-event">Events</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link onClick={handleLogOut}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}

          <li>
            <Link>Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
