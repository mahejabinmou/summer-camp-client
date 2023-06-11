import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom/dist";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const [showPass,setShowPass]=useState(false);
    let from= location.state?.from?.pathname || "/";

    const handleLogin=event=>{
        event.preventDefault();
        const form= event.target;
        const email=form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result =>{
            const user= result.user;
            const loggedInUser={email:user.email}
            console.log(loggedInUser);
            fetch(`https://summer-camp-server-side-gold.vercel.app/jwt`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify()
            })
            Swal.fire({
                title: 'User Login Successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
               navigate(from, {replace:true});
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <img className="w-[800px]" src="https://i.ibb.co/6y2vPRT/login.jpg" alt="" />
       </div>
    <div className="card text-center md:w-1/2 max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl p-2 font-bold">Login now!</h1>
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control mb-4 relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPass? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" />
          <p className="absolute top-[54px] right-[15px]"
          onClick={()=>setShowPass(!showPass)}
           >
            <small>{showPass? <FaEye/>: <FaEyeSlash/>}</small>

          </p>
          
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value='Login' />
        </div>
      </form>
      <p><small>New here? <Link to="/signup">Create an account</Link></small></p>
    <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;