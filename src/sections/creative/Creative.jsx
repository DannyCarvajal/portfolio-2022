import Piano from "../../components/creative/piano";
import usePianoLogic from "../../hooks/pianoLogic";
import SecretWord from "../../components/global/secretword";
import AlertIndication from "../../components/global/alertIndication";
import "./creative.scss";
//IMAGES
import Behance from "../../assets/img/behancecontact.png";
import BehanceArrow from "../../assets/img/behancearrow.png";
import PlayButton from "../../assets/img/playbutton.png";
import PlayArrow from "../../assets/img/playarrow.png";

const Creative = () => {
	const {playPianoHandler, pianoKeyHandler, notePlayingInMelody, turn, level} = usePianoLogic();

	const bgColorAnimation = "linear-gradient(164.62deg, #765492 10.78%, #B396E6 95.15%)";

	return (
		<section className="creativeSection">
			<div className="creativeSection__descContainer">
				<p className="descContainer__desc">
					For sure, most problems that come to be can be solved in various ways, but is not until <b>design</b> comes in, that the inner magic comes out
				</p>
			</div>
			<div className="creativeSection__behance">
				<h2 className="behance__desc">Check out my behance</h2>
				<img src={BehanceArrow} alt="arrow" className="behance__arrow" />
				<a href="https://www.behance.net/oliver-daniel" target="_blank" rel="noreferrer">
					<img src={Behance} alt="behance" className="behance__contactimg" />
				</a>
			</div>
			<div className="pianoGame">
				<p className="pianoGame__indications">{turn}</p>
				<div className="pianoGame__playlevels">
					<img src={PlayButton} alt="play" className="play" onClick={playPianoHandler} />
					<p className="levels">{level}/3</p>
				</div>
				<img src={PlayArrow} alt="arrow" className="play__arrow" />
			</div>
			<Piano pianoGuess={pianoKeyHandler} notePlayingInMelody={notePlayingInMelody} />
			{/* ANIMATION OF SOLVED */}
			{level === "solved" && <AlertIndication found="g" message="Letter Found" bgcolor={bgColorAnimation} />}
			<SecretWord secretLetter={level === "solved" ? "g" : ""} bgcolor={bgColorAnimation} letterColor="white" animation={level === "solved" ? "animation" : ""} />
		</section>
	);
};

export default Creative;
