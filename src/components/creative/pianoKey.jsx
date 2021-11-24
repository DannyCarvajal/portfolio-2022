import {useState, useEffect} from "react";
import "./pianokey.scss";

const PianoKey = ({keyType, note, pianoGuess, notePlayingInMelody}) => {
	const [noteOctave, setNoteOctave] = useState(note.split(" ")[2]);
	const [isActive, setisActive] = useState(false);

	const keyHandler = () => {
		new Audio(process.env.PUBLIC_URL + `/music/${noteOctave}.mp3`).play();
		pianoGuess(noteOctave);
	};

	useEffect(() => {
		if (notePlayingInMelody === noteOctave) {
			setisActive(true);
		}
	}, [notePlayingInMelody]);

	return <div className={`${keyType}Key ${note} ${isActive ? "active" : ""} notPlaying`} onClick={keyHandler}></div>;
};

export default PianoKey;
