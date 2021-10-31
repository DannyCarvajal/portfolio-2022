import "./secretword.scss";

const secretword = ({secretLetter}) => {
	return (
		<div className="secretWord">
			<p className="secretWord__vowel">{secretLetter}</p>
		</div>
	);
};
export default secretword;
