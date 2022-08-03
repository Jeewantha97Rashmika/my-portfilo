import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import project04 from '../../img/project01.png'
import project02 from '../../img/project02.jpg'
import project03 from '../../img/ui.png'
import project01 from '../../img/ui02.png'


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
        <SwiperSlide style={{textAlign:"center"}}>
          <img src={project01} alt="UI/IX design" style={{width:"20rem",height:"13rem", border:"3px solid white"}}/><br/><br/>
          <span style={{fontSize:"25px",textAlign:"center"}}>React Js - My Portfolio </span>
        </SwiperSlide>
        <SwiperSlide style={{textAlign:"center"}}>
          <img src={project02} alt=""style={{width:"20rem",height:"13rem", border:"3px solid white"}} /><br/><br/>
          <span style={{fontSize:"25px",textAlign:"center"}}>Pizza UI/UX Design</span>
        </SwiperSlide>
        <SwiperSlide style={{textAlign:"center"}}>
          <img src={project03} alt="" style={{width:"20rem",height:"13rem", border:"3px solid white"}}/><br/><br/>
          <span style={{fontSize:"25px",textAlign:"center"}}>
            Responsive Flutter UI Design</span>
        </SwiperSlide>
        <SwiperSlide style={{textAlign:"center"}}>
          <img src={project04} alt="" style={{width:"20rem",height:"13rem", border:"3px solid white"}}/><br/><br/>
          <span style={{fontSize:"25px",textAlign:"center"}}>Pizza UI/UX Design</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
