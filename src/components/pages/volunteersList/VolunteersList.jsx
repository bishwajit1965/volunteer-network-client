import { Link } from "react-router-dom";
import Logo from "../../../assets/logos/Group 1329.png";

const VolunteersList = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center space-x-24 mb-6">
        <img src={Logo} alt="" className="w-fill h-14" />
        <h1 className="text-3xl font-bold">Volunteers List</h1>
      </div>

      <div className="grid md:grid-cols-12 gap-4 justify-between">
        <div className="md:col-span-3 col">
          <Link to="/add-event">Add Events</Link>
        </div>
        <div className="md:col-span-9 col bg-gray-200 rounded-sm p-5 ">
          <div className="bg-white p-4 rounded-sm">Right</div>
        </div>
      </div>
    </div>
  );
};

export default VolunteersList;
