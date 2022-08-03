import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import SnackBar from "./SnackBar";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a9tznif",
        "template_r51ifvc",
        form.current,
        "TaXP8Lc4vyQ8a7ARs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          {/* <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div> */}
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="to_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="from_name"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input
            type="submit"
            value="Send"
            className="button"
            
          />
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          < SnackBar changed={done}  massege={"Thank you for contact me"}/>
          {/* <di
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
