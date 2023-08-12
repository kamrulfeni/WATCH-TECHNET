import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar> 
             <div className="pt-16"></div>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;