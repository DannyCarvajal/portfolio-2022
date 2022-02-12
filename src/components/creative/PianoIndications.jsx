//IMAGES
import PlayButton from "assets/img/playbutton.png";
import PlayArrow from "assets/img/playarrow.png";
// STYLES
import "./pianoIndications.scss";

const PianoIndications = ({ turn, level, playPianoHandler }) => {
  return (
    <div className="pianoGame">
      <p className="pianoGame__indications">{turn}</p>
      <div className="pianoGame__playlevels">
        <img
          src={PlayButton}
          alt="play"
          className="play"
          onClick={playPianoHandler}
        />
        <p className="levels">{level}/2</p>
      </div>
      <img src={PlayArrow} alt="arrow" className="play__arrow" />
    </div>
  );
};

export default PianoIndications;
