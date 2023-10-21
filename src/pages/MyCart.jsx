import { useLoaderData } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";
import MycartDetails from "./MycartDetails";
import { useState } from "react";


const MyCart = () => {
    const data = useLoaderData()
    console.log(data);
    const [products, setProducts]= useState(data)
    console.log(products);
   if(products.length>0){
    return (
        <div className="">
     <Navber></Navber>
    
    <div className="hero min-h-screen  bg-black">
          
     <div className="  lg:mt-32 gap-4 grid grid-cols-1 lg:grid-cols-3">

 
     {
        products.map(item=> <MycartDetails 
        key={item._id}
        item={item}
        products={products}
        setProducts={setProducts}

        >

        </MycartDetails>)
      } 

     </div> 

      </div>
      
      

       </div>
    );

   } 
   else{
    return (
       <div> 
        <Navber></Navber>
         <div className="text-center hero min-h-screen  bg-black text-white text-3xl"> 
            <h1>There is no added product</h1>
        </div>
       </div> 
    )
   }
};

export default MyCart;