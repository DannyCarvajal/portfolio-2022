import "./secretword.scss";

const secretword = ({secretLetter, bgcolor, letterColor}) => {
	return (
		<div className="secretWord" style={{background: bgcolor}}>
			<p className="secretWord__vowel" style={{color: letterColor}}>
				{secretLetter}
			</p>
		</div>
	);
};
export default secretword;
