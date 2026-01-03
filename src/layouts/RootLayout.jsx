import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
    return (
      <div>
        <Navbar />
        <div className="min-h-[calc(100vh-340px)]">
          <Outlet />
        </div>
        {/* <div className="px-2">
          <Footer />
        </div> */}
        <Footer />
      </div>
    );
};

export default RootLayout;