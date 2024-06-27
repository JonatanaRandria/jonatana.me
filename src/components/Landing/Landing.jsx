import PurpleArrows from "./PurppleArrows";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";
import DarkWave from "./Wave/DarkWave";

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__topText">
        <span className="landing__purpleText">Hi, my name is</span>
        <h1 className="landing__mainText"> Jonatana Andrianina .</h1>
        <h1 className="landing__mainText">I like to code and integrate software solutions.</h1>
      </div>

      <hr className="landing__hr" />

      <div className="landing__bottomText">
        <h1 className="landing__descText">Computer Science Student </h1>
        <h1 className="landing__descText">Specialist in music software solutions</h1>
      </div>

      <PurpleArrows />
      <LeftSocialMediaIcons />
      <DarkWave/>
   
    </section>
  );
}

export default Landing;
