import { useLoaderData } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";


const MyCart = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="">
     <Navber></Navber>
    
    <div className="hero min-h-screen bg-black">
    <h1>My Added Cart</h1>
       
      </div>


       </div>
    );
};

export default MyCart;