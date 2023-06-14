import { CgSelect } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GrUserAdd } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom/dist";


const StudentContent = () => {
    return (
        <div>
            <div>
            <li><NavLink to="/dashboard/myselectclasses">
                <CgSelect /> My Select Classes</NavLink></li>

            <li><NavLink to="/dashboard/myenrolleclasses"> <GrUserAdd />My Enrolled Classes</NavLink></li>
            <li><NavLink to="/dashboard/payment"><MdPayment></MdPayment>payment</NavLink></li>
            </div>

            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
        </div>
    );
};

export default StudentContent;