// COMPONENTS
import PersonalData from "components/introduction/personalData";
import MainLogo from "components/global/MainLogo.jsx";
// STYLES
import "./intro.scss";
// IMAGES
import Danny from "assets/img/olivercircle.png";
// CONSTANTS
import { PUZZLES_TEXT } from "constants/puzzlesText";

const Intro = () => {
  return (
    <section className="introSection">
      <MainLogo />
      <img
        src={Danny}
        alt="Danny carvajal"
        className="introSection__oliverimage"
      />
      <PersonalData
        role="Front-End Developer"
        message={PUZZLES_TEXT["intro"]}
      />
    </section>
  );
};

export default Intro;
