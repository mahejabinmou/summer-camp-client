import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useLocation } from "react-router-dom/dist";


const Main = () => {
    const location= useLocation();
    console.log(location);
    const noHeaderFooter= location.pathname.includes('login')|| location.pathname.includes('signup')
    return (
        <div>
            {
                noHeaderFooter || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }


           
        </div>
    );
};

export default Main;