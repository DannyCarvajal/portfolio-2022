import {useState} from "react";

import "./namesCharacter.scss";

const NamesCharacter = () => {
	const properNames = ["sergio", "max", "lewis"];
	let randNumber = Math.floor(Math.random() * 6 + 1);
	const [currentCharacter, setCurrentCharacter] = useState(`f${randNumber}`);

	return (
		<div className="namesCharacter">
			<div className="namesCharacter__characterContainer">
				<img src={process.env.PUBLIC_URL + `/img/characters/${currentCharacter}.png`} alt="character" className="character" width="150px" />
			</div>
			<div className="namesCharacter__title">
				<h3>Your name's character</h3>
			</div>
		</div>
	);
};

export default NamesCharacter;
