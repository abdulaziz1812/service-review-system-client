import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-teal-400/85 sticky backdrop-blur top-0 z-10 "> 
            <Navbar  ></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="bg-teal-400">
                <Footer></Footer>
                </div>
            
        </div>
    );
};

export default MainLayout;