import {useState, useEffect, useRef} from "react";

const usePianoLogic = () => {
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
		const bpm = 110;
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
				setTurn(" We could be heroes ");
				setLevel("solved");
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

	return {
		pianoKeyHandler,
		playPianoHandler,
		notePlayingInMelody,
		turn,
		level,
	};
};

export default usePianoLogic;
