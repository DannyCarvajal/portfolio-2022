import {useState, useEffect} from "react";
import "./pianokey.scss";

const PianoKey = ({keyType, note, pianoGuess, notePlayingInMelody}) => {
	const [bgColor, setbgColor] = useState("");
	const [noteOctave, setNoteOctave] = useState(note.split(" ")[2]);

	const keyHandler = () => {
		new Audio(process.env.PUBLIC_URL + `/music/${noteOctave}.mp3`).play();
		pianoGuess(noteOctave);
		// CHANGE COLOR OF PIANO KEYNOTE
		keyType === "white" ? setbgColor("#6c768b4b") : setbgColor("#333557de");
	};

	// CLEAN BG COLOR AFTER CLICKING IT
	useEffect(() => {
		let cleanColor = setTimeout(() => setbgColor(""), 200);
		return () => clearTimeout(cleanColor);
	}, [bgColor]);

	useEffect(() => {
		if (notePlayingInMelody === noteOctave) keyHandler();
	}, [notePlayingInMelody]);

	return (
		<div className={`${keyType}Key ${note}`} onClick={keyHandler} style={{backgroundColor: bgColor}}>
			<audio className="pianoAudio">
				<source src={`music/${note.split(" ")[2]}.mp3`} type="audio/mpeg"></source>
			</audio>
		</div>
	);
};

export default PianoKey;
