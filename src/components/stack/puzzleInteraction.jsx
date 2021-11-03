import "./puzzleInteraction.scss";

const PuzzleInteraction = ({description, handler, imgName, keyWord}) => {
	return (
		<div className="interactionPuzzleContainer">
			<p className="interactionPuzzleContainer__desc">{description}</p>
			<div className="interactionPuzzleContainer__iconContainer" onClick={handler}>
				<img src={`img/${imgName}.svg`} alt={imgName} height="18px" />
			</div>
			<h3 className="interactionPuzzleContainer__keyword">{keyWord}</h3>
		</div>
	);
};

export default PuzzleInteraction;
