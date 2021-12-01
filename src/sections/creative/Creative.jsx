// LOGIC
import usePianoLogic from "../../hooks/pianoLogic";
import {useScreenSize} from "../../hooks/helpers";
// COMPONENTS
import Piano from "../../components/creative/Piano.jsx";
import SecretWord from "../../components/global/SecretWord";
import CheckSecretWord from "../../components/global/CheckSecretWord";
import BehanceContact from "../../components/creative/BehanceContact";
import PianoIndications from "../../components/creative/PianoIndications";
// STYLES
import "./creative.scss";
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
			<BehanceContact />
			<PianoIndications turn={turn} level={level} playPianoHandler={playPianoHandler} />
			<Piano pianoGuess={pianoKeyHandler} notePlayingInMelody={notePlayingInMelody} />
			<CheckSecretWord solved={turn === "Melody solved"} letter="ig" bgColor="PIANO" />
			<SecretWord secretLetter={!isDesktop ? "ig" : ""} bgcolor={COLORS["PIANO"]} letterColor="white" animation="" />
		</section>
	);
};

export default Creative;
