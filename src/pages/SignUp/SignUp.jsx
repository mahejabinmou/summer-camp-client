
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } =
        useForm();
    const [showPass, setShowPass] = useState(false);





    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // const onConfirm = (data) => {
        const password = data.password;
        const confirm = data.confirm;
        if (password !== confirm) {
            alert("confirm password not match");
            return;
        }
        console.log(data);
        // }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email,role:'user' };

                        fetch(`http://localhost:4000/users`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Sucessfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center md:w-1/2 ">
                    <img className="w-[500px]" src="https://i.ibb.co/rZkBdjK/sign.jpg" alt="" />
                </div>
                <div className="card p-2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center  font-bold">SignUp now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name  is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">photoURL  is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email  is required</span>}

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"}  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                            })}
                                placeholder="password" className="input input-bordered" />
                            <p className="absolute top-[54px] right-[15px]"
                                onClick={() => setShowPass(!showPass)}
                            >
                                <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>

                            </p>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password required</p>}

                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password minimum 6 required</p>}

                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password less than 20 characters</p>}

                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase,one number and one special character</p>}
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>

                            <input
                                type={showPass ? "text" : "password"} {...register("confirm",
                                    { required: true })} name="confirm"
                                placeholder="confirm password" className="input input-bordered"
                            />

                            <p className="absolute top-[54px] right-[15px]"
                                onClick={() => setShowPass(!showPass)}
                            >
                                <small>{showPass ? <FaEye /> : <FaEyeSlash />}</small>

                            </p>

                            {errors.confirm && (<span className="text-red-600">You need to re-type password</span>)}

                        </div>




                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />

                        </div>
                    </form>
                    <p className="text-center"><small>Already have an account? <Link to="/login">Login</Link></small></p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>

    );
};

export default SignUp;