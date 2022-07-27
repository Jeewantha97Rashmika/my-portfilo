import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import project01 from '../../img/project01.png'
import project02 from '../../img/project02.jpg'


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={project01} alt="UI/IX design" /><br/><br/>
          <span style={{fontSize:"30px",textAlign:"center",alignItems:"center",margin:"60px"}}>Pizza UI/UX Design</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project02} alt="" /><br/><br/>
          <span style={{fontSize:"30px",textAlign:"center",alignItems:"center",margin:"60px"}}>Pizza UI/UX Design</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" /><br/><br/>
          <span style={{fontSize:"30px",textAlign:"center",alignItems:"center",margin:"60px"}}>Pizza UI/UX Design</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" /><br/><br/>
          <span style={{fontSize:"30px",textAlign:"center",alignItems:"center",margin:"60px"}}>Pizza UI/UX Design</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
