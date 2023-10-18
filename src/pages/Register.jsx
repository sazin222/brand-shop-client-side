import { Link } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";
import { AuthContext } from "../Authprovider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";



const Register = () => {

    const {createUser,handleUpdateProfile}= useContext(AuthContext)
     
    const handelCreateUser = e =>{
      e.preventDefault() 
      const name= e.target.name.value
      const photo= e.target.photo.value
      const email = e.target.email.value
      const password = e.target.password.value
       
      if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{7,}$/.test(password)){
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Please provide 6 characters or more in length, a capital letter and a special characters'
           
            
          }) 
          return 
      }


      createUser(email,password)
      .then(result=>{
        handleUpdateProfile(name, photo)
        console.log(result.user);
        Swal.fire({
            title: 'Successfully Register your account',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
      })
      .catch(error=>{
        console.log(error);
      })

    }


    return (
        <div className="">
        <Navber></Navber>
        
    <div className="hero min-h-screen bg-black">
    
            <div className="hero-content flex-col items-center">
            <div className="text-center mt-3 lg:mt-20 ">
                <h1 className="text-3xl text-white font-semibold">Register your account</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-md shadow-white bg-base-100">
             
                <form onSubmit={handelCreateUser} className="card-body">
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