import "./secretword.scss";

const SecretWord = ({secretLetter, bgStyles, letterColor, animation = ""}) => {
	return (
		<div className={"secretWord " + animation} style={bgStyles}>
			<p className="secretWord__vowel" style={{color: letterColor}}>
				{secretLetter}
			</p>
		</div>
	);
};
export default SecretWord;
