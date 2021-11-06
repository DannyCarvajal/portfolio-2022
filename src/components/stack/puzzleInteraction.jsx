import "./puzzleInteraction.scss";

const PuzzleInteraction = ({description, handler, image, keyWord}) => {
	return (
		<div className="interactionPuzzleContainer">
			<p className="interactionPuzzleContainer__desc">{description}</p>
			<div className="interactionPuzzleContainer__iconContainer" onClick={handler}>
				<img src={image} alt={keyWord} height="18px" />
			</div>
			<h3 className="interactionPuzzleContainer__keyword">{keyWord}</h3>
		</div>
	);
};

export default PuzzleInteraction;
