import {useState, useEffect, useRef} from "react";

const usePianoLogic = () => {
	// PIANO PUZZLE
	const level1 = ["a4", "g4", "f4"];
	const level2 = [...level1, "as4", "a4"];
	const level3 = [...level2, "g4", "c5", "d5"];
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
		// PREVENT PLAYING TWICE
		if (turn === pianoTurn) return null;

		setTurn(pianoTurn);
		const bpm = 110;
		const speed = (60 / bpm) * 1000;
		let counter = 0;

		// PLAY EVERY X SECONDS

		const playNote = () => {
			if (counter < currentLevel.length) {
				const note = currentLevel[counter];
				const audio = new Audio(process.env.PUBLIC_URL + `/music/${note}.mp3`);
				audio.play();
				setNotePlayingInMelody(note);
				counter++;
				setTimeout(playNote, speed);
			} else {
				setTurn(userTurn);
				setNotePlayingInMelody("");
			}
		};
		playNote();

		/*
		let song = setInterval(() => {
			if (counter < currentLevel.length) {
				setNotePlayingInMelody(currentLevel[counter]);
				counter++;
				new Audio(process.env.PUBLIC_URL + `/music/${notePlayingInMelody}.mp3`).play();
			} else {
				clearInterval(song);
				setNotePlayingInMelody("");
				setTurn(userTurn);
			}
		}, speed); */
	};

	// PIANO GUESS
	const checkIfLevelPassed = () => {
		if (pianoGuess.join("").includes(currentLevel.join(""))) {
			if (level === 3) {
				setTurn("Melody solved");
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
