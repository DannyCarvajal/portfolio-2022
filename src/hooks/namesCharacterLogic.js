import {useState, useEffect} from "react";
import {female, male} from "../helpers/names";

const useRandomCharacter = name => {
	// IMAGES SAVED BY A SPECIFIC NAME
	const maleNames = ["sergio", "max", "lewis", "daniel", "danny", "kevin", "barry", "peter", "luis", "reiner", "miguel", "midudev", "oscar"];
	const femaleNames = [];

	// HELPFUL FUNCTIONS
	const AMOUNTIMAGESBYGENDER = 6;
	let randNumber = () => Math.floor(Math.random() * AMOUNTIMAGESBYGENDER + 1);
	const findGender = () => {
		if (name.trim() === "") return null;

		if (female.includes(name + " ")) return "female";
		if (male.includes(name + " ")) return "male";
		return "unknown";
	};
	// STATE
	const [currentCharacter, setCurrentCharacter] = useState("");

	useEffect(() => {
		let gender = findGender();

		// NO NAME IS BEING SET YET
		if (!gender) {
			setCurrentCharacter("transparent");
			return;
		}

		// LOOK IF NAME HAS SPECIFFIC PICTURE
		if (femaleNames.includes(name)) {
			setCurrentCharacter(`${name}`);
			return;
		}

		if (maleNames.includes(name)) {
			setCurrentCharacter(`${name}`);
			return;
		}

		// ASSIGNED RANDOM PICTURE BASED ON NAME
		if (gender === "female") {
			setCurrentCharacter(`f${randNumber()}`);
		}

		if (gender === "male") {
			setCurrentCharacter(`m${randNumber()}`);
		}

		if (gender === "unknown") {
			setCurrentCharacter(`o${randNumber()}`);
		}
	}, [name]);

	return [currentCharacter];
};

export default useRandomCharacter;
