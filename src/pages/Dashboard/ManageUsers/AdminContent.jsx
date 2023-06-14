import { FaHome } from "react-icons/fa";
import { MdManageAccounts, MdManageHistory } from "react-icons/md";
import { NavLink } from "react-router-dom/dist";


const AdminContent = () => {
    return (
        <div>

            <div>
                <li><NavLink to="/dashboard/manageclass"><MdManageHistory />Manage Classes</NavLink></li>

                <li><NavLink to="/dashboard/manageUsers"><MdManageAccounts />Manage Users</NavLink></li>

            </div>

            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

        </div >
    );
};

export default AdminContent;