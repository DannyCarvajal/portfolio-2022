import React, {useState} from "react";
import PianoKey from "./pianoKey";
import "./piano.scss";

const Piano = ({pianoGuess}) => {
	const piano = [
		["c", "white"],
		["cs", "black"],
		["d", "white"],
		["ds", "black"],
		["e", "white"],
		["f", "white"],
		["fs", "black"],
		["g", "white"],
		["gs", "black"],
		["a", "white"],
		["as", "black"],
		["b", "white"],
	];
	const [pianoKeys, setpianoKeys] = useState(piano);

	const PianoElements = ({octave}) => {
		return (
			<div className="pianoContainer">
				{pianoKeys.map(([note, keyType]) => {
					return <PianoKey keyType={keyType} note={`${note} ${octave} ${note + octave}`} key={note + octave} pianoGuess={pianoGuess} />;
				})}
			</div>
		);
	};

	return (
		<div className="piano">
			<PianoElements octave={2} />
			<PianoElements octave={3} />
			<PianoElements octave={4} />
			<PianoElements octave={5} />
			<PianoElements octave={6} />
		</div>
	);
};

export default Piano;
