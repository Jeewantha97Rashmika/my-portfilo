import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background:"var(--background-color)",
      }}
    >
      <div style={{margin:"0 100px 0 100px"}}>
      <Navbar />
      <Intro />

      <Services />
     
      {/* <Experience /> */}
      <Works />
 
      <Portfolio />

      {/* <Testimonial /> */}

      <Contact />
     

      </div>
      <Footer />
    </div>
  );
}

export default App;
