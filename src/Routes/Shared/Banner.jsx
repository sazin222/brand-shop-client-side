import bgpic from '../../assets/bg-cover.jpg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Banner = () => {
    useEffect(()=>{
        
        AOS.init({duration:'1000'});
      
    },[])
    return (
        <div className="hero h-3/5 lg:min-h-screen  bg-cover" style={{backgroundImage: `url(${bgpic})`}}>
            
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div  data-aos="fade-right" className="w-3/5 text-left" >
      <h1 className="mb-5 text-3xl lg:text-5xl font-bold"> 
       <span className='text-orange-500'>Let us</span>  help you <br /> get you next cars! 
    
      </h1>
      <p className="mb-5">Welcome to our Motojax Automotive cars selling website.Explore a diverse range of car models, each with detailed descriptions, high-quality images, and videos to help you make an informed choice. We believe in transparency. Access comprehensive vehicle history reports for a clear picture of each cars past. </p>
      
    </div>
  </div>
</div>
    );
};

export default Banner;