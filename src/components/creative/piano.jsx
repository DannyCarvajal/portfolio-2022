import PianoKey from "./pianoKey";
import "./piano.scss";

const Piano = ({pianoGuess, notePlayingInMelody}) => {
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
	const octaves = [2, 3, 4, 5, 6];

	const PianoElements = ({octave}) => {
		return (
			<div className="pianoContainer">
				{piano.map(([note, keyType]) => {
					return <PianoKey keyType={keyType} note={`${note} ${octave} ${note + octave}`} key={note + octave} pianoGuess={pianoGuess} notePlayingInMelody={notePlayingInMelody} />;
				})}
			</div>
		);
	};

	return (
		<div className="piano">
			{octaves.map(octave => (
				<PianoElements key={octave + "octave"} octave={octave} />
			))}
		</div>
	);
};

export default Piano;
