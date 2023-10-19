import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const ClientReveiw = () => {
  return (
    <div className="mt-14 mb-5">
      <h1 className=" my-4 text-center font-semibold text-3xl">
       <span className="text-orange-600"> 5-Star Rating</span> Our Clients Love Us!
      </h1>
      <div className="border-2 w-14 mx-auto"></div>
      <p className="text-center mt-4 text-slate-400 text-sm">
        HAPPY CLIENTS ABOUT US
      </p>

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
        className="mySwiper swiper-wrapper my-5  "
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card  bg-base-200  mx-auto shadow-xl">
            <div className="card-body text-center">
              <p className="font-semibold">
              I am a car enthusiast, and this website is my go-to for all things automotive. It is a treasure trove of information, from detailed car reviews and specs to buying guides and industry news. The user-friendly interface makes navigation a breeze.
              </p>
              <div className="card-actions justify-center">
                <p className="text-gray-400">Emily , New York </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card mx-auto  bg-base-200  shadow-xl">
            <div className="card-body text-center">
              <p className="font-semibold">
              As a DIY car enthusiast, I have found this website to be an invaluable resource. The repair guides and how-to articles are thorough and easy to follow. I have saved a significant amount on car maintenance thanks to the tips and tutorials I have found here. Highly recommended!
              </p>
              <div className="card-actions justify-center">
                <p className="text-gray-400">James , Los Angeles </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  bg-base-200 shadow-xl">
            <div className="card-body text-center">
              <p className="font-semibold">
              I was skeptical about buying a used car online, but this website made it a breeze. Their listings are comprehensive, with plenty of photos and detailed histories. The verification process for sellers adds an extra layer of trust. 
              </p>
              <div className="card-actions justify-center">
                <p className="text-gray-400">Michael ,Miami </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-200  shadow-2xl">
            <div className="card-body text-center">
              <p className="font-semibold">
              I stumbled upon this automotive website while searching for a new car, and I am so glad I did. The site is comparison tools helped me narrow down my choices, and their expert reviews were incredibly informative. It saved me a ton of time and made my car shopping experience hassle-free.
              </p>
              <div className="card-actions justify-center">
                <p className="text-gray-400">Ethan , Dallas </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default ClientReveiw;
