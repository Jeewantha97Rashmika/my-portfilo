import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/mypic02.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import TyprText from "./TypeText";

const Intro = () => {
  
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span> <TyprText/></span>
       
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Jeewantha97Rashmika"> <img src={Github} alt="" /> </a>
          <a href="https://www.linkedin.com/in/jeewanatha-rashmika-b5a56820a/">
            <img src={LinkedIn} alt="" />
            
            </a>
          <a href="">
            
            <img src={Instagram} alt="" />
            </a>
        </div>
      </div>


      {/* right image side */}
      <div className="i-right">
        <img src={""} alt="" />
        <img src={""} alt="" />
        <img src={boy} alt="" style={{right:0, width:390, height:390}} />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={""}
          alt=""
        />
         <motion.div
          initial={{ top: "-4%", left: "-24%" }}
          whileInView={{ left: "1%" }}
          transition={transition}
          className="floating-div"
         
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Graphic" text2="Designer" />
        </motion.div>

        <motion.div
          initial={{ top: "54%", left: "74%" }}
          whileInView={{ left: "70%" ,top:"50%"}}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Flutter" text2="Developer" />
        </motion.div>


        {/* animation */}
        <motion.div
        initial={{ top: "54%", left: "-24%" }}
        whileInView={{ left: "1%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="UI/UX " text2="Designer" />
        </motion.div>

        {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
