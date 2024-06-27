import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./index.css";
import "aos/dist/aos.css";
import LightWave from "../../components/Landing/Wave/LightWave";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          👋 Hello My name is RANDRIAMPARANY Jonatana Andrianina   and I am a third-year Computer
          Science Student attending the {" "}
          <span className="about__specialText"> <a href="https://www.linkedin.com/company/hei-school/" target="_blank"> Haute Ecole d'informatique </a> </span>.
          <br />
          <br />

          
          🏢 Passionate about coding and always seeking new challenges, {" "}
         
            I am an enthusiastic developer looking for an   <span className="about__specialText">internship (Stage) </span>  or  <span className="about__specialText">apprenticeship (Alternance) </span>. Through my personal and academic projects, I am able to {" "}
          <span className="about__specialText">
          quickly adapt to changes
          </span>{" "}
          
           <br/>
           <br />   
          🎹 Besides Coding , I have been creating Sonix Tech for two years and they provide software solutions for music to people.
        </p>
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/photo_logo.jpg"
        alt="My Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
