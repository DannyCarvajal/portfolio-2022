// LOGIC
import useSlidePuzzle from "hooks/slidePuzzleSwipe";
// STYLES
import "./slidePuzzleItem.scss";

const PuzzleItem = ({
	item,
	currentOrder,
	setIsSlidePuzzleSolved,
	setCurrentOrder,
	solution,
	solvedHandler,
}) => {
	const checkIfSolved = () => {
		if (currentOrder.join("") === solution.join("")) {
			setTimeout(() => {
				solvedHandler();
			}, 500);
		}
	};

	const { positionStyles, preventDragHandler, currentIndex } = useSlidePuzzle(
		item,
		currentOrder,
		setIsSlidePuzzleSolved,
		setCurrentOrder,
		checkIfSolved
	);

	let isEmptyElement = item === "blank" ? "emptyElement " : "";

	return (
		<div
			id={item}
			className={
				"tech-item " +
				isEmptyElement +
				(currentIndex === 5 || currentIndex === 7 ? "slideToFadeHand" : "")
			}
			style={positionStyles}
			onMouseDown={preventDragHandler}
		>
			<img
				src={process.env.PUBLIC_URL + `/img/${item}.svg`}
				alt={item}
				height={item === "daniel" ? "35spx" : "50px"}
			/>
		</div>
	);
};

export default PuzzleItem;
