import { Outlet } from "react-router-dom/dist";
// import { FcAddDatabase } from 'react-icons/fc';
// import { CgSelect } from 'react-icons/cg';
// import { GrUserAdd } from 'react-icons/gr';
// import { MdBorderColor, MdManageAccounts, MdManageHistory } from 'react-icons/md';
import useAdmin from "../hooks/useAdmin";
import AdminContent from "../pages/Dashboard/ManageUsers/AdminContent";
import InstructorContent from "../pages/Dashboard/ManageUsers/InstructorContent";
import StudentContent from "../pages/Dashboard/ManageUsers/StudentContent";
import useInstructor from "../hooks/useInstructor";
const Dashboard = () => {

    // TODO: load data from the server to have dynamic isAdmin
    // const isAdmin=true;
    const [isAdmin]= useAdmin();
    const [isInstructor]=useInstructor();
    




    return (
        <div className="drawer md:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn bg-[#40e698] drawer-button md:hidden">Open drawer</label>
        
            </div>
            <div className="drawer-side bg-[#40e698]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 w-50 h-full  text-white">

                    {
                        isAdmin ?
                        (<AdminContent></AdminContent>):
                         isInstructor ?
             (  <InstructorContent></InstructorContent>)
             :
                            (
                                <StudentContent></StudentContent>
                            )
                    }

            

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;