import { Outlet } from "react-router-dom";
import NavBar from "../components/pages/shared/navBar/NavBar";
import Footer from "../components/pages/shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
