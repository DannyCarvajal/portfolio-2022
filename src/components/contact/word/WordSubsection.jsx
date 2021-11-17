import "./wordSubsection.scss";

const WordSubsection = () => {
	return (
		<div className="wordSubsection">
			<div className="wordSubsection__gradientBg"></div>
			<div className="wordSubsection__guessContainer">
				<input type="text" className="wordSubsection__word" maxLength="5" />
				<h2 className="indication">Write the secret word</h2>
			</div>
		</div>
	);
};

export default WordSubsection;
