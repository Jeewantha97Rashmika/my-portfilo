import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Jeewantha Rashmika--CV.pdf";
import Github from "../../img/github.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services" style={{ marginLeft: "0px" }}>
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ fontSize: "4rem", color: "wheat" }}>My Awesome</span>
        <span>services</span>
        <spane style={{ fontSize: "1rem" }}>
          ⭐️ Are you a business owner, an entrepreneur, or someone who needs
          help
          <br /> with a personal project? You might be looking for design
          support, custom brand,
          <br /> or new and exciting content for your marketing materials.
          Whoever you are, you've <br />
          found the right person! I help clients like you reach the goals
          they've set for themselves <br />
          and their businesses.⭐️
          <br />
        </spane>
        <a href={Resume} download>
          <button style={{ width: "9rem" }} className="button s-button">
            Download CV
          </button>
        </a>
        <br />
        <br />
        <br />
        <br />
        <div>
          <p align="left">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
              alt="android"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
              alt="dart"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
              alt="flutter"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
              alt="illustrator"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <br />
            <br />
            <br />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
              alt="photoshop"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="sass"
              marginLeft="20px"
              width="60"
              height="60"
            />{" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg"
              alt="xd"
              marginLeft="20px"
              width="60"
              height="60"
            />
          </p>
        </div>
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>

      {/* right */}
      <div className="cards" style={{ marginLeft: "200px" }}>
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML5, CSS3, SASS, JavaScript, React,NextJs, Flutter"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma,Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div> */}
      </div>
    </div>
  );
};

export default Services;
