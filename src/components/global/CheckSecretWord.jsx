// COMPONENTS
import AlertIndication from "./AlertIndication";
import SecretWord from "./SecretWord";
// CONSTANTS
import {COLORS} from "../../constants/colors";

const CheckSecretWord = ({solved, letter, letterColor = "white", color}) => {
	const message = letter.length === 1 ? "Letter found" : "Two letters found";
	const foundColor = COLORS[color];

	return (
		<>
			{solved && <AlertIndication found={letter} message={message} bgcolor={foundColor} />}
			<SecretWord secretLetter={solved ? letter : ""} bgcolor={foundColor} letterColor={letterColor} animation={solved ? "animation" : ""} />;
		</>
	);
};

export default CheckSecretWord;
