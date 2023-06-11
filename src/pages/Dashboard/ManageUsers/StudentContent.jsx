import { CgSelect } from "react-icons/cg";
import { GrUserAdd } from "react-icons/gr";
import { NavLink } from "react-router-dom/dist";


const StudentContent = () => {
    return (
        <div>
            <li><NavLink to="/dashboard/myselectclasses">
                                            <CgSelect /> My Select Classes</NavLink></li>

                                        <li><NavLink to="/dashboard/myenrolleclasses"> <GrUserAdd />My Enrolled Classes</NavLink></li>
        </div>
    );
};

export default StudentContent;