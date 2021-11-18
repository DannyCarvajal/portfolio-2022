import {useState, useEffect} from "react";
import {female, male} from "./names";

import "./namesCharacter.scss";

const NamesCharacter = ({name}) => {
	// IAMGES SAVED BY A SPECIFIC NAME
	const maleNames = ["sergio", "max", "lewis"];
	const femaleNames = [];

	// HELPFUL FUNCTIONS
	let randNumber = () => Math.floor(Math.random() * 6 + 1);
	const findGender = () => {
		if (name.trim() !== "" && female.includes(name + " ")) {
			return "female";
		} else if (name.trim() !== "" && male.includes(name + " ")) {
			return "male";
		} else {
			return "unknown";
		}
	};
	// STATE
	const [currentCharacter, setCurrentCharacter] = useState(`o${randNumber()}`);

	useEffect(() => {
		let gender = findGender();
		console.log(name);

		if (femaleNames.includes(name)) {
			setCurrentCharacter(`${name}`);
			console.log("female and no photo");
			return;
		}

		if (maleNames.includes(name)) {
			setCurrentCharacter(`${name}`);
			console.log("male and no photo");
			return;
		}

		if (gender === "female") {
			setCurrentCharacter(`f${randNumber()}`);
			console.log("female");
		}

		if (gender === "male") {
			setCurrentCharacter(`m${randNumber()}`);
			console.log("male");
		}
	}, [name]);

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
