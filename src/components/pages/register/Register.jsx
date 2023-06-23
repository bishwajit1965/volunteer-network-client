import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import Logo from "../../../assets/logos/Group 1329.png";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    alert("OK");
  };
  return (
    <div className="grid md:justify-center md:items-center h-screen">
      <div className="border py-8 px-10 rounded-md shadow-lg">
        <img src={Logo} alt="" className="w-80 h-16 mb-5" />
        <h2 className="text-2xl font-bold mb-2 text-indigo-500 flex items-center">
          Register as a volunteer
          <FaUserPlus className="h-6 w-6 text-indigo-500 ml-4" />
        </h2>

        <form onSubmit={handleRegister}>
          <div className="form-control">
            <input
              type="text"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="name"
              placeholder="Full name..."
              id=""
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="email"
              placeholder="Email..."
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="date"
            />
          </div>
          <div className="form-control">
            <input
              type="url"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="url"
              placeholder="Image url..."
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="date"
              placeholder="Description..."
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="phone"
              placeholder="Phone number..."
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="rounded-full border w-80 py-1 px-2 mb-2"
              name="country"
              placeholder="Country..."
            />
          </div>
          <div className="form-control w-full">
            <button
              type="submit"
              className="w-full bg-indigo-500 p-1 rounded-full text-white"
            >
              Register
            </button>
          </div>
        </form>
        <Link to="/login" className="mt-2">
          <small className="text-indigo-500">
            Already a member ?{" "}
            <span className="text-amber-500">Please Login</span>
          </small>
        </Link>
      </div>
    </div>
  );
};

export default Register;
