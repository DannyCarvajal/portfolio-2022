import {useState, useEffect} from "react";

const useSlidePuzzle = (item, currentOrder, setIsSlidePuzzleSolved, setCurrentOrder, checkIfSolved) => {
	const DIMENSIONS_SLIDE_ITEM = (450 - 40) / 3; /* CONTAINERWIDTH - PADDING / ITEMS PER ROW */
	const CONTAINERPADDING = 40 / 2;

	let [line, indexLine, top, left] = positionOfElelement(item);
	const [positionStyles, setpositionStyles] = useState({top, left});
	const [currentIndex, setCurrentIndex] = useState(lineAndPositionToIndex(line, indexLine));

	const itemHandler = () => {
		let [allowedMove] = checkIfAllowedMovement(item);
		// IF A MOVE IS ALLOWED SWIPE THE ELEMENTS
		if (allowedMove === 0 || allowedMove) {
			let swipedArray = currentOrder;
			swipedArray[allowedMove] = swipedArray.splice(currentIndex, 1, "blank")[0];
			setCurrentIndex(allowedMove);
			setCurrentOrder(swipedArray);
		}
	};

	useEffect(() => {
		setpositionStyles({top, left});
		setCurrentIndex(lineAndPositionToIndex(line, indexLine));
		checkIfSolved();
	}, [currentOrder, currentIndex]);

	const preventDragHandler = e => {
		e.preventDefault();
		itemHandler();
	};

	function checkIfAllowedMovement(item) {
		let [line, position] = positionOfElelement(item);
		let possibleIndexes = [];

		// CHECK UP DOWN LEFT AND RIGHT FOR ALLOWED MOVEMENT
		if (position + 1 <= 2) {
			possibleIndexes.push(lineAndPositionToIndex(line, position + 1));
		}

		if (position - 1 >= 0) {
			possibleIndexes.push(lineAndPositionToIndex(line, position - 1));
		}

		if (line + 1 <= 2) {
			possibleIndexes.push(lineAndPositionToIndex(line + 1, position));
		}

		if (line - 1 >= 0) {
			possibleIndexes.push(lineAndPositionToIndex(line - 1, position));
		}

		// CHECK IF POSSIBLE INDEXES ARE EQUALS TO BLANK SPACE
		return possibleIndexes.filter(index => currentOrder[index] === "blank");
	}

	function positionOfElelement(item) {
		let line = Math.floor(currentOrder.indexOf(item) / 3);
		let position = currentOrder.indexOf(item) % 3;
		return [line, position, DIMENSIONS_SLIDE_ITEM * line + CONTAINERPADDING, DIMENSIONS_SLIDE_ITEM * position + CONTAINERPADDING];
	}

	function lineAndPositionToIndex(line, position) {
		return line * 3 + position;
	}

	return {positionStyles, preventDragHandler, currentIndex};
};

export default useSlidePuzzle;
