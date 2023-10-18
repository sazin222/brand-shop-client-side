import {  NavLink } from "react-router-dom";
import logo from '../../assets/7412668.jpg'

const Navber = () => {
  

    const Navlinks= <> 
     
     <li> <NavLink to={"/"} >HOME</NavLink>  </li>
     <li> <NavLink to={"/about"} >ABOUT</NavLink>  </li>
     <li> <NavLink to={"/login"} >LOG IN</NavLink>  </li>
     
     {/* { 
    user && 
     <> 
         <li> <NavLink to={"/blog"}>BLOG</NavLink></ li> 
         <li> <NavLink to={"/gallery"}>GALLERY</NavLink></li> 
      </>
    } */}
     
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
  
  </div>
</div>
    );
};

export default Navber;