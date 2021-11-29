// LOGIC
import usePianoLogic from "../../hooks/pianoLogic";
import {useScreenSize} from "../../hooks/helpers";
// COMPONENTS
import Piano from "../../components/creative/Piano.jsx";
import SecretWord from "../../components/global/SecretWord";
import CheckSecretWord from "../../components/global/CheckSecretWord";
// STYLES
import "./creative.scss";
//IMAGES
import Behance from "../../assets/img/behancecontact.png";
import BehanceArrow from "../../assets/img/behancearrow.png";
import PlayButton from "../../assets/img/playbutton.png";
import PlayArrow from "../../assets/img/playarrow.png";
// CONSTANTS
import {COLORS} from "../../constants/colors";
import {PUZZLES_TEXT} from "../../constants/puzzlesText";

const Creative = () => {
	const {playPianoHandler, pianoKeyHandler, notePlayingInMelody, turn, level} = usePianoLogic();

	// SEE SCREEN SIZE
	const [, isDesktop] = useScreenSize();

	return (
		<section className="creativeSection">
			<div className="creativeSection__descContainer">
				<p className="descContainer__desc" dangerouslySetInnerHTML={{__html: PUZZLES_TEXT["creativity"]}}></p>
			</div>
			<div className="creativeSection__behance">
				<h2 className="behance__desc">Check out my behance</h2>
				<img src={BehanceArrow} alt="arrow" className="behance__arrow" />
				<a href="https://www.behance.net/dannycarvajal1" target="_blank" rel="noreferrer">
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
			<CheckSecretWord solved={turn === "Melody solved"} letter="ig" bgColor="PIANO" />
			<SecretWord secretLetter={!isDesktop ? "ig" : ""} bgcolor={COLORS["PIANO"]} letterColor="white" animation="" />
		</section>
	);
};

export default Creative;
