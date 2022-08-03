import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer" style={{height:"15rem"}} >
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
       
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
        <span>jeewantharashmika80@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
