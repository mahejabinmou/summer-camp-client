import { NavLink, Outlet } from "react-router-dom/dist";
import { FcAddDatabase } from 'react-icons/fc';
import { CgSelect } from 'react-icons/cg';
import { GrUserAdd } from 'react-icons/gr';
import { MdBorderColor, MdHome, MdManageAccounts, MdManageHistory } from 'react-icons/md';
const Dashboard = () => {

    // TODO: load data from the server to have dynamic isAdmin
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#40e698]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-white">

                    {/* {
                        isAdmin ?
                            <> */}
                                
                                <li><NavLink to="/dashboard/manageclass"><MdManageHistory />Manage Classes</NavLink></li>

                                <li><NavLink to="/dashboard/manageUsers"><MdManageAccounts />Manage Users</NavLink></li>

                                
                            {/* </> :
                             isInstructor ?
                                <> */}

                                    
                                    <li><NavLink to="/dashboard/addclass"><FcAddDatabase /> Add Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myclass"> <MdBorderColor />My Classes</NavLink></li>
                                {/* </>
                                : */}
                                
                                    {/* <> */}
                                        
                                        <li><NavLink to="/dashboard/myselectclasses">
                                            <CgSelect /> My Select Classes</NavLink></li>

                                        <li><NavLink to="/dashboard/myenrolleclasses"> <GrUserAdd />My Enrolled Classes</NavLink></li>
                                        {/* </> */}
                                
{/* } */}




                </ul>

            </div>
        </div>
    );
};

export default Dashboard;