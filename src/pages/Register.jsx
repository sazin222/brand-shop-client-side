import { Link } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";



const Register = () => {
    return (
        <div className="">
        <Navber></Navber>
        
    <div className="hero min-h-screen bg-black">
    
            <div className="hero-content flex-col items-center">
            <div className="text-center mt-3 lg:mt-20 ">
                <h1 className="text-3xl text-white font-semibold">Register your account</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-md shadow-white bg-base-100">
             
                <form className="card-body">
                <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name" placeholder="Name" className="input input-bordered" required />
        </div>  

        <div className="form-control">
    <label className="label">
     <span className="label-text">Photo url</span>
     </label>
      <input type="text" placeholder="Photo url" className="input input-bordered" name='photo' />
      </div>
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
                  <div className="form-control ">
                    <button className="btn bg-orange-500 text-white">REGISTER</button>
                  </div>
                </form>
                <p className="text-center mb-3 "> Already Have An Account ? <Link to={"/login"} className="text-red-400">Login</Link></p>
            
              </div>
            </div>
          </div>
    
    
    
           </div>
    );
};

export default Register;