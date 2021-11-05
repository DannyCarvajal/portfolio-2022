import {useState, useEffect, useRef} from "react";
import Piano from "../../components/creative/piano";
import "./creative.scss";

const Creative = () => {
	console.log("creative");
	// PIANO PUZZLE
	const level1 = ["a4", "g4", "f4", "as4", "a4"];
	const level2 = [...level1, "g4", "c5", "d5"];
	const level3 = [...level2, "c5", "a4"];
	const noTurn = "Play the song and repeat the notes";
	const pianoTurn = "Playing...";
	const userTurn = "Your turn";

	const [currentLevel, setCurrentLevel] = useState(level1);
	const [level, setLevel] = useState(1);
	const [turn, setTurn] = useState(noTurn);
	const [pianoGuess, setPianoGuess] = useState([]);
	const lastNotePlayed = useRef("");

	const playNote = (note, speed) => {
		let pianoNote = document.getElementsByClassName(note)[0];
		pianoNote.click();
	};
	const playPianoHandler = () => {
		setTurn(pianoTurn);
		const bpm = 100;
		const speed = (60 / bpm) * 1000;
		let counter = 0;

		// PLAY EVERY X SECONDS
		let song = setInterval(() => {
			if (counter < currentLevel.length) {
				playNote(currentLevel[counter], speed);
				counter++;
			} else {
				clearInterval(song);
				setTurn(userTurn);
			}
		}, speed);
	};

	// PIANO GUESS
	const checkIfLevelPassed = () => {
		if (pianoGuess.join("").includes(currentLevel.join(""))) {
			if (level === 3) {
				console.log("You won!");
				setTurn("you won");
			} else {
				setCurrentLevel(level === 1 ? level2 : level3);
				setLevel(level + 1);
			}
			setPianoGuess([]);
			setTurn(noTurn);
			console.log("Level passed");
		} else {
			console.log("Level failed");
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
				<img src="img/behancearrow.png" alt="arrow" className="behance__arrow" />
				<a href="https://www.behance.net/oliver-daniel" target="_blank" rel="noreferrer">
					<img src="/img/behancecontact.png" alt="behance" className="behance__contactimg" />
				</a>
			</div>
			<div className="pianoGame">
				<p className="pianoGame__indications">{turn}</p>
				<div className="pianoGame__playlevels">
					<img src="img/playbutton.png" alt="play" className="play" onClick={playPianoHandler} />
					<p className="levels">{level}/3</p>
				</div>
				<img src="images/behancecontanct.png" alt="arrow" className="play__arrow" />
			</div>
			<Piano pianoGuess={pianoKeyHandler} />
		</div>
	);
};

export default Creative;
