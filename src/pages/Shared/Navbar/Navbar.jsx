import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

    

  const {user,logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
      logOut()
      .then()
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/allclasses">Classes</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
       
        {
            user? <>
            {/* <span>{user?.displayName}</span> */}
            <span><img className='w-[50px] h-[50px] mx-6 rounded-[50%]' src={user.photoURL} alt="" /> </span>
            <button  onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
            <li><Link to='dashboard'>Dashboard</Link></li>
            </> 
            :
            
            <li><Link to="/login">LogIn</Link></li>
        }
        
        


    </>
    return (
        <>
            <div className="navbar  z-10 bg-opacity-30 max-w-screen-xl bg-green-300 font-bold ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><p><span className='text-success'><small>Mahejabin's</small></span> <br /><span className=' text-emerald-500' >Music School</span></p>
           </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-emerald-600">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;