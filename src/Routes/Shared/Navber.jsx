import {  Link, NavLink } from "react-router-dom";
import logo from '../../assets/7412668.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";

const Navber = () => {
  const{logOut,user} = useContext(AuthContext)
  
  const handelSingout= e =>{
    e.preventDefault()
    logOut()
    .then(result=>{
      console.log(result);
    })
    .catch(error=>{
      console.log(error);
    })
  }

    const Navlinks= <> 
     
     <li> <NavLink to={"/"} >HOME</NavLink>  </li>
     <li> <NavLink to={"/login"} >LOG IN</NavLink>  </li>

     { 
    user && 
     <> 
         <li> <NavLink to={"/mycart"}>MY CART</NavLink></ li> 
         <li> <NavLink to={"/addproduct"}>ADD PRODUCT</NavLink></li> 
      </>
    }
     
    </>


    return (
        <div className="navbar text-white my-2 w-full mx-auto lg:absolute z-10">
  <div className="navbar-start">
    <div className="dropdown text-black">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {Navlinks}
      </ul>
    </div>
    <a className=" w-12 lg:w-24 flex gap-2 items-center">
        <img className="rounded-full" src={logo} alt="" />
        <p className=" font-mono text-xl text-black lg:text-white"><span className="text-orange-500">Moto</span>Jax</p>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {Navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
      user?.email ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
   <img src={user.photoURL} alt={user.displayName} />
       </div>
        </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           <li>
         <button className="btn btn-sm  ">{user.displayName}</button>
             </li>
               <li>
            <button className="btn bg-orange-500 text-white"
             onClick={handelSingout}
              >LOG OUT</button>
              </li>
            </ul>
         </div>
            :
            <Link to='/login'>
              <button className="btn bg-orange-500 text-white">LOG IN</button>
               </Link>
                    }
  
  </div>
</div>
    );
};

export default Navber;