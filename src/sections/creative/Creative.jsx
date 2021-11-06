import {useState, useEffect, useRef} from "react";
import Piano from "../../components/creative/piano";
import "./creative.scss";
//IMAGES
import Behance from "../../assets/img/behancecontact.png";
import BehanceArrow from "../../assets/img/behancearrow.png";
import PlayButton from "../../assets/img/playbutton.png";
import PlayArrow from "../../assets/img/playarrow.png";

const Creative = () => {
	// PIANO PUZZLE
	const level1 = ["a4", "g4", "f4", "as4", "a4"];
	const level2 = [...level1, "g4", "c5", "d5"];
	const level3 = [...level2, "c5", "a4"];
	const noTurn = "Play the song and repeat the notes";
	const pianoTurn = "Playing...";
	const nextTurn = "Play next level";
	const userTurn = "Your turn";

	const [currentLevel, setCurrentLevel] = useState(level1);
	const [level, setLevel] = useState(1);
	const [turn, setTurn] = useState(noTurn);
	const [pianoGuess, setPianoGuess] = useState([]);
	const lastNotePlayed = useRef("");
	const [notePlayingInMelody, setNotePlayingInMelody] = useState("");

	const playPianoHandler = () => {
		setTurn(pianoTurn);
		const bpm = 100;
		const speed = (60 / bpm) * 1000;
		let counter = 0;

		// PLAY EVERY X SECONDS
		let song = setInterval(() => {
			if (counter < currentLevel.length) {
				setNotePlayingInMelody(currentLevel[counter]);
				counter++;
			} else {
				clearInterval(song);
				setNotePlayingInMelody("");
				setTurn(userTurn);
			}
		}, speed);
	};

	// PIANO GUESS
	const checkIfLevelPassed = () => {
		if (pianoGuess.join("").includes(currentLevel.join(""))) {
			if (level === 3) {
				setTurn("We could be heroes, me and you");
				setLevel("♾️");
			} else {
				setCurrentLevel(level === 1 ? level2 : level3);
				setLevel(level + 1);
				currentLevel !== 1 ? setTurn(nextTurn) : setTurn(noTurn);
			}
			setPianoGuess([]);
		}
	};

	useEffect(() => {
		lastNotePlayed.current = pianoGuess[pianoGuess.length - 1];
		if (turn === userTurn) {
			checkIfLevelPassed();
		}
	});

	const pianoKeyHandler = note => {
		if (turn === userTurn) {
			setPianoGuess([...pianoGuess, note]);
		}
	};

	return (
		<div className="creativeSection">
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
		</div>
	);
};

export default Creative;
