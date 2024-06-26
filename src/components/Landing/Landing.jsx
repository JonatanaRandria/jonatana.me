import PurpleArrows from "./PurppleArrows";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1 className="landing__mainText">Jonatana RANDRIAMPARANY .</h1>
        <h1 className="landing__mainText">I like to code and integrate software solutions.</h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__mainText">Computer Science</h1>
        <h1 className="landing__mainText">Student</h1>
      </div>

      <PurpleArrows />

      <LeftSocialMediaIcons />

   
    </section>
  );
}

export default Landing;
