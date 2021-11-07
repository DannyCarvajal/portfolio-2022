import React, {useState, useEffect} from "react";
import "./slidePuzzleItem.scss";
import useSlidePuzzle from "../../hooks/slidePuzzleSwipe";

const PuzzleItem = ({item, currentOrder, setIsSlidePuzzleSolved, setCurrentOrder}) => {
	const {checkCompleted, checkIfAllowedMovement, positionOfElelement, lineAndPositionToIndex} = useSlidePuzzle(item, currentOrder, setIsSlidePuzzleSolved, setCurrentOrder);

	let [line, indexLine, top, left] = positionOfElelement(item);
	const [positionStyles, setpositionStyles] = useState({top, left});
	const [currentIndex, setCurrentIndex] = useState(lineAndPositionToIndex(line, indexLine));

	const itemHandler = () => {
		let [allowedMove] = checkIfAllowedMovement(item);
		// IF A MOVE IS ALLOWED SWIPE THE ELEMENTS
		console.log("The item is clicked");
		if (allowedMove === 0 || allowedMove) {
			let swipedArray = currentOrder;
			swipedArray[allowedMove] = swipedArray.splice(currentIndex, 1, "blank")[0];
			setCurrentIndex(allowedMove);
			setCurrentOrder(swipedArray);
		}
	};

	useEffect(() => {
		console.log("the child recharged");
		setpositionStyles({top, left});
		setCurrentIndex(lineAndPositionToIndex(line, indexLine));
		checkCompleted();
	}, [currentOrder, currentIndex]);

	let isEmptyElement = item === "blank" ? "emptyElement " : "";
	const preventDragHandler = e => e.preventDefault();

	return (
		<div id={item} className={"tech-item " + isEmptyElement} onClick={itemHandler} style={positionStyles} onMouseDown={preventDragHandler}>
			<img src={process.env.PUBLIC_URL + `/img/${item}.svg`} alt={item} height={item === "daniel" ? "35spx" : "50px"} />
		</div>
	);
};

export default PuzzleItem;
