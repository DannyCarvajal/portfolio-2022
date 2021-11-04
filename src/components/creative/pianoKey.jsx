import "./pianokey.scss";

const PianoKey = ({keyType, note}) => {
	const keyHandler = e => {
		let audio = e.target.firstChild;
		audio.play();
	};

	return (
		<div className={`${keyType}Key ${note}`} onClick={keyHandler}>
			<audio>
				<source src={`music/${note.split(" ")[2]}.mp3`} type="audio/mpeg"></source>
			</audio>
		</div>
	);
};

export default PianoKey;
