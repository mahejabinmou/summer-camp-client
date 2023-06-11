import { MdManageAccounts, MdManageHistory } from "react-icons/md";
import { NavLink } from "react-router-dom/dist";


const AdminContent = () => {
    return (
        <div>
            <li><NavLink to="/dashboard/manageclass"><MdManageHistory />Manage Classes</NavLink></li>

            <li><NavLink to="/dashboard/manageUsers"><MdManageAccounts />Manage Users</NavLink></li>

        </div>
    );
};

export default AdminContent;