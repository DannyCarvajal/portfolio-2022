// COMPONENTS
import AlertIndication from "./AlertIndication";
import SecretWord from "./SecretWord";
// CONSTANTS
import { COLORS } from "constants/colors";

const CheckSecretWord = ({ solved, letter, letterColor = "white", bgColor }) => {
	const message = letter.length === 1 ? "Letter found" : "Two letters found";
	const alertStyles = {
		background: COLORS[bgColor],
	};

	return (
		<>
			{solved && <AlertIndication found={letter} message={message} bgStyles={alertStyles} />}
			<SecretWord
				secretLetter={solved ? letter : ""}
				bgStyles={alertStyles}
				letterColor={letterColor}
				animation={solved ? "animation" : ""}
			/>
		</>
	);
};

export default CheckSecretWord;
