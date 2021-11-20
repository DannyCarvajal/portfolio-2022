// STYLES
import "./namesCharacter.scss";
// LOGIC
import useRandomCharacter from "../../../hooks/namesCharacterLogic";

const NamesCharacter = ({name}) => {
	const [currentCharacter] = useRandomCharacter(name);
	// console.log(currentCharacter);
	const characterIndication = currentCharacter === "transparent" ? "Type your name to find your character" : "Your name's character";

	return (
		<div className="namesCharacter">
			<div className="namesCharacter__characterContainer">
				<img src={process.env.PUBLIC_URL + `/img/characters/${currentCharacter}.png`} alt="character" className="character" width="150px" />
			</div>
			<div className="namesCharacter__title">
				<h3 className="characterIndications">{characterIndication}</h3>
			</div>
		</div>
	);
};

export default NamesCharacter;
