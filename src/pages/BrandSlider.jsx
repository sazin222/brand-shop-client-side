
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const BrandSlider = () => {
  const [sliders, setSlider]= useState([])

  useEffect(()=>{
    fetch('/slider.json')
    .then(res=>res.json())
    .then(data=> setSlider(data))
  },[])
    return (
        <div className="">
                  
          {
            sliders.map(slider=>  <Swiper
              key={slider.id}
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
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="hero min-h-screen card  shadow-xl image-full">
                    <figure className="h-1/3 w-1/2 ">
                      <img src={slider.image} alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title"></h2>
                      <p> New collection</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero   min-h-screen card  shadow-xl image-full">
                    <figure className="h-1/2 w-1/2 ">
                      <img src={slider.image2} alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title"></h2>
                      <p> New collection</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="hero min-h-screen card shadow-xl image-full">
                    <figure className="h-1/2 w-1/2 ">
                      <img src={slider.image3} alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title"></h2>
                      <p> New collection</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>  
             )
          }
  
      
        </div>
    );
};

export default BrandSlider;