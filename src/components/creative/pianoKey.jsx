import {useState} from "react";
import "./pianokey.scss";

const PianoKey = ({keyType, note, pianoGuess}) => {
	const keyHandler = e => {
		const note = e.target.classList[3];
		new Audio(`music/${note}.mp3`).play();
		pianoGuess(note);
		console.log(new Date().getSeconds());
	};

	return (
		<div className={`${keyType}Key ${note}`} onClick={keyHandler}>
			<audio className="pianoAudio">
				<source src={`music/${note.split(" ")[2]}.mp3`} type="audio/mpeg"></source>
			</audio>
		</div>
	);
};

export default PianoKey;
