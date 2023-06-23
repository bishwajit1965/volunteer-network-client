import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logos/Group 1329.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
const Login = () => {
  const { user, googleSignIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User login successful !!!");
      })
      .catch((error) => {
        console.log(error);
        setError("Login encountered an error");
      });
  };
  return (
    <div className="grid md:justify-center md:items-center h-screen">
      <div className="border py-8 px-10 rounded-md shadow-lg">
        {success && (
          <p className="text-center">
            <small>
              <i className="text-green-500">{success}</i>
            </small>
          </p>
        )}
        {error && (
          <p className="text-center">
            <small>
              <i className="text-red-500">{error}</i>
            </small>
          </p>
        )}
        {user ? (
          <p className="text-center">
            <span className="text-green-600 font-bold">Welcome ! </span>
            <small className="text-indigo-500">{user?.email}</small>
          </p>
        ) : (
          <span className="text-red-500 text-center">
            <small>
              <i>You are not logged in.</i>
            </small>
          </span>
        )}
        <img src={Logo} alt="" className="w-80 h-16 mb-5" />
        <h2 className="text-2xl font-bold mb-2 text-indigo-500">
          Please Login
        </h2>
        <button
          onClick={handleLogIn}
          className="rounded-full border w-80 p-1 flex"
        >
          <FaGoogle className="h-6 w-6 text-red-500" />{" "}
          <span className="text-1xl font-bold ml-2">Log in</span>
        </button>
        <Link to="/register" className="mt-2">
          <small className="text-indigo-500">
            Not a member yet ?{" "}
            <span className="text-amber-500">Please Register</span>{" "}
          </small>
        </Link>
      </div>
    </div>
  );
};

export default Login;
