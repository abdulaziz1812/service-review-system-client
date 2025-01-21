import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div >
            <div className="bg-teal-400"> 
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