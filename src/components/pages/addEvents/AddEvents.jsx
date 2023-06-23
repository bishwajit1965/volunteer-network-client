import { Link } from "react-router-dom";
import Logo from "../../../assets/logos/Group 1329.png";
import { useState } from "react";

const AddEvents = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const insertEvent = async (e) => {
    e.preventDefault();
    const events = {
      eventName,
      eventDate,
      eventLocation,

      // Add more fields as needed
    };

    const formData = new FormData();
    formData.append("eventData", JSON.stringify(events));
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(events),
      });

      if (response.ok) {
        const result = await response.json(response);
        console.log("Event inserted successfully:", result);
        alert("OK");
      } else {
        console.error("Failed to insert event");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="mt-10">
      <div className="md:flex items-center space-x-24 mb-6">
        <img src={Logo} alt="" className="w-fill h-14" />
        <h1 className="text-3xl font-bold">Add Events</h1>
      </div>

      <div className="grid md:grid-cols-12 gap-4 justify-between">
        <div className="md:col-span-3 col-1 bg-gray-200 p-4 rounded-md">
          <Link to="/volunteers">All Volunteers List</Link>
        </div>
        <div className="md:col-span-9 col-1 bg-gray-200 rounded-md p-5 ">
          <div className="bg-white p-4 rounded-md">
            <form onSubmit={insertEvent} encType="multipart/form-data">
              <div className="form-control">
                <label htmlFor="eventNameInput">Event Name:</label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  id="eventNameInput"
                  required
                  className="border rounded-md"
                />
              </div>
              <div className="form-control">
                <label htmlFor="eventDateInput">Event Date:</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  id="eventDateInput"
                  required
                  className="border rounded-md"
                />
              </div>
              <div className="form-control">
                <label htmlFor="eventLocationInput">Event Location:</label>
                <input
                  type="text"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  id="eventLocationInput"
                  required
                  className="border rounded-md"
                />
              </div>
              <div className="form-control">
                <label htmlFor="imageInput">Event Image:</label>
                <input
                  type="file"
                  id="imageInput"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
              <div className="form-control w-full my-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white rounded-md p-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
