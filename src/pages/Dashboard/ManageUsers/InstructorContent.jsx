import { FcAddDatabase } from "react-icons/fc";
import { NavLink } from "react-router-dom/dist";


const InstructorContent = () => {
    return (
        <div>
            <li><NavLink to="/dashboard/addclass"><FcAddDatabase /> Add Class</NavLink></li>
            <li><NavLink to="/dashboard/myclass"> <MdBorderColor />My Classes</NavLink></li>
        </div>
    );
};

export default InstructorContent;