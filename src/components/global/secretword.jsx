import "./secretword.scss";

const secretword = ({secretLetter, bgcolor, letterColor, animation = ""}) => {
	return (
		<div className={"secretWord " + animation} style={{background: bgcolor}}>
			<p className="secretWord__vowel" style={{color: letterColor}}>
				{secretLetter}
			</p>
		</div>
	);
};
export default secretword;
