import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Routes/Shared/Navber";
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay} from 'swiper/modules';



const BrandDetails = () => {
    const {id} = useParams()
    const allbrand = useLoaderData()
    const finddata= allbrand.find(i=>i.id == id)
    return (
        <div className="grid gap-2 grid-cols-1  bg-black"> 
        <Navber></Navber>
           
           <Swiper 
           
           spaceBetween={10}
           centeredSlides={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay]}
           className="mySwiper swiper-wrapper "
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
           
           > 
          <SwiperSlide> 
          
          <div className="hero  min-h-screen bg-black card   shadow-xl image-full">
  <figure className="h-1/2 w-1/2"><img src={finddata.image2} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p> New collection</p>
  </div>
</div>

          </SwiperSlide>
       <SwiperSlide>
       <div className="hero  min-h-screen  bg-black card  shadow-xl image-full">
  <figure className="h-1/2 w-1/2"><img src={finddata.image3} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p> New collection</p>
  </div>
</div>
       </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen  bg-black card   shadow-xl image-full">
  <figure className="h-1/2 w-1/2"><img src={finddata.image4} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p> New collection</p>
  </div>
</div>

        </SwiperSlide>
           </Swiper>

         </div>
    );
};

export default BrandDetails;