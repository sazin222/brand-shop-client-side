import { Link } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";
import {  FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
       <div className="">
    <Navber></Navber>
    
<div className="hero min-h-screen bg-black">

        <div className="hero-content flex-col items-center">
        <div className="text-center mt-3 lg:mt-20 ">
            <h1 className="text-3xl text-white font-semibold">Login your account</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-white bg-base-100">
         
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-500 text-white">Login</button>
              </div>
            </form>
            <p className="text-center mb-3 ">Do not Have An Account ? <Link to={"/register"} className="text-red-400">Register</Link></p>
         <p className="text-center mb-3 "> <button className="btn bg-white border-2 text-black">
            <FcGoogle className="text-3xl mr-3"></FcGoogle>
            Continue With Google</button></p>
          </div>
        </div>
      </div>



       </div>
    );
};

export default Login;