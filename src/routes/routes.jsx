import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import AddEvents from "../components/pages/addEvents/AddEvents";
import AdminEventsLayout from "../layouts/AdminEventsLayout";
import VolunteersList from "../components/pages/volunteersList/VolunteersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminEventsLayout />,
    children: [
      {
        path: "/add-event",
        element: <AddEvents />,
      },
      {
        path: "/volunteers",
        element: <VolunteersList />,
      },
    ],
  },
]);

export default router;
