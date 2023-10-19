/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Banner from "../Routes/Shared/Banner";
import Navber from "../Routes/Shared/Navber";
import Feature from "./Feature";
import Footer from "../Routes/Shared/Footer";
import ClientReveiw from "./ClientReveiw";
import ChooseUs from "./ChooseUs";


const Home = () => {
  const brands = useLoaderData()
    console.log(brands);
    return (
        <div className="min-h-scree">
        <Navber></Navber>
        <Banner></Banner> 
        <div className="mt-6 px-3">
            <h2 className="text-4xl text-black text-center">Feature Listing</h2> 
            <div className="grid grid-cols-1 gap-4  lg:grid-cols-3">
                {
                   brands.map(item=> <Feature
                   item={item}
                   key={item.id}>

                   </Feature>)
                }
            </div>
        </div> 
        <ChooseUs></ChooseUs>
        <ClientReveiw></ClientReveiw>

        <Footer></Footer>
           
        
        
    </div>
    );
};

export default Home;