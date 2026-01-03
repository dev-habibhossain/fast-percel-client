import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
    return (
      <div>
        <Navbar />
        <div className="h-calc(100vh-100px)">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default RootLayout;