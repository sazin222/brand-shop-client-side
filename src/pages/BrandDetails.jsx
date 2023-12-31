// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BrandSlider from "./brandSlider";
import Navber from "../Routes/Shared/Navber";
import { AiFillEdit } from "react-icons/ai";


const BrandDetails = () => {
  const allbrand = useLoaderData();
  console.log(allbrand);

  return (
   <div className="bg-black"> 
   <Navber></Navber>
     <BrandSlider></BrandSlider>
   <div className="grid grid-cols-1 gap-3 px-3 lg:grid-cols-3 mt-5">
      
      {
        allbrand.map(brand=> <div key={brand._id} className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={brand.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{brand.brandname}</h2>
          <p className="font-semibold">Name:{brand.name}</p>
          <p className="font-semibold">Type: {brand.type}</p>
          <p className="font-semibold">Price: {brand.price}</p>
          <div className="rating">
            <input
              type="radio"
              name={brand.rating}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={brand.rating}
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name={brand.rating}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={brand.rating}
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name={brand.rating}
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="card-actions justify-between ">
            <Link to={`/productdetails/${brand._id}`}><button className="btn ">View Details</button></Link>
            <Link to={`/updateProduct/${brand._id}`}> 
         
         <button className='flex items-center justify-center btn'>
            Update <AiFillEdit></AiFillEdit>
          </button>
         </Link> 
          </div>
        </div>
      </div> )
      }
      
    </div>
   
   </div>
  );
};

export default BrandDetails;
