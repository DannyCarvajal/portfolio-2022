// COMPONENTS
import Piano from "../../components/creative/Piano.jsx";
import usePianoLogic from "../../hooks/pianoLogic";
import SecretWord from "../../components/global/Secretword";
import AlertIndication from "../../components/global/alertIndication";
import Helpers from "../../hooks/helpers";
// STYLES
import "./creative.scss";
//IMAGES
import Behance from "../../assets/img/behancecontact.png";
import BehanceArrow from "../../assets/img/behancearrow.png";
import PlayButton from "../../assets/img/playbutton.png";
import PlayArrow from "../../assets/img/playarrow.png";

const Creative = () => {
	const {playPianoHandler, pianoKeyHandler, notePlayingInMelody, turn, level} = usePianoLogic();

	// SEE SCREEN SIZE
	const {useScreenSize} = Helpers();
	const [isTabletOrDesktop] = useScreenSize();

	const bgColorAnimation = "linear-gradient(180deg, #ca74c2e5 0%, rgba(53, 56, 65, 0.3) 100%)";
	console.log(isTabletOrDesktop);

	return (
		<section className="creativeSection">
			<div className="creativeSection__descContainer">
				<p className="descContainer__desc">
					Most problems that come to be can be solved in various ways. But is not until <b>design</b> comes in that the inner magic comes out. That’s why I have serious interest for <b>UI/UX</b> design
				</p>
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
			{/* ANIMATION OF SOLVED */}
			{turn === "Melody solved" && <AlertIndication found="g" message="Letter Found" bgcolor={bgColorAnimation} />}
			<SecretWord secretLetter={turn === "Melody solved" || !isTabletOrDesktop ? "g" : ""} bgcolor={bgColorAnimation} letterColor="white" animation={turn === "Melody solved" ? "animation" : ""} />
		</section>
	);
};

export default Creative;
