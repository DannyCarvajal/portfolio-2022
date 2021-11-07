import additionalSlideFunc from "./slidePuzzleAdditionals";

const useSlidePuzzle = (puzzleOrder, setIsSlidePuzzleSolved, setCurrentOrder) => {
	const DIMENSIONS_SLIDE_ITEM = (450 - 40) / 3; /* CONTAINERWIDTH - PADDING / ITEMS PER ROW */
	const CONTAINERPADDING = 40 / 2;
	const itemHandler = e => {
		let itemName = e.target.id;
		let [allowedMove] = checkIfAllowedMovement(itemName);
		// IF A MOVE IS ALLOWED SWIPE THE ELEMENTS
		if (allowedMove === 0 || allowedMove) {
			console.log("allowedMove", allowedMove);
			slideItem(e.target, itemName, allowedMove);
			checkCompleted();
		}
	};

	const checkIfAllowedMovement = item => {
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
		return possibleIndexes.filter(index => puzzleOrder[index] === "blank");
	};

	const positionOfElelement = item => {
		let line = Math.floor(puzzleOrder.indexOf(item) / 3);
		let position = puzzleOrder.indexOf(item) % 3;
		return [line, position, DIMENSIONS_SLIDE_ITEM * line + CONTAINERPADDING, DIMENSIONS_SLIDE_ITEM * position + CONTAINERPADDING];
	};

	const lineAndPositionToIndex = (line, position) => line * 3 + position;

	const slideItem = (itemElement, item, indexBlank) => {
		let indexItem = puzzleOrder.indexOf(item);
		const blankElement = document.getElementsByClassName("emptyElement")[0];
		// MOVE THE ITEMS WITH TRANSITION ANIMATION FOR BETTER PERFORMANCE
		let [, , top, left] = positionOfElelement(item);
		let [elementTranslation, blankTranslation] = translationMovement([top, left], [+blankElement.style.top.slice(0, -2), +blankElement.style.left.slice(0, -2)]);
		itemElement.style.transform = elementTranslation;
		blankElement.style.transform = blankTranslation;

		// SWIPE THE ITEMS IN THE USEREF
		let swipedArray = puzzleOrder;
		swipedArray[indexBlank] = swipedArray.splice(indexItem, 1, "blank")[0];
		setCurrentOrder(swipedArray);

		// UPDATE TOP AND LEFT OF ITEMS MOVED AND RESTART TRANSFORM ANIMATION
		const [, , topElement, leftElement] = positionOfElelement(item);
		itemElement.style.transform = "";
		itemElement.style.top = topElement + "px";
		itemElement.style.left = leftElement + "px";
		const [, , topBlank, leftBlank] = positionOfElelement("blank");
		blankElement.style.transform = "";
		blankElement.style.top = topBlank + "px";
		blankElement.style.left = leftBlank + "px";
	};
	const translationMovement = ([currentTop, currentLeft], [newTop, newLeft]) => {
		if (currentTop === newTop) {
			// IF MOVEMENT IS HORIZONTAL
			return [`translate(${newLeft - currentLeft}px)`, `translate(${currentLeft - newLeft}px)`];
		} else {
			// IF MOVEMENT IS VERTICAL
			return [`translate(0,${newTop - currentTop}px)`, `translate(0,${currentTop - newTop}px)`];
		}
	};

	const checkCompleted = () => {
		let slideAnswer = ["html", "css", "javascript", "sass", "git", "figma", "react", "daniel", "blank"];
		let {fadeOutElement} = additionalSlideFunc(setIsSlidePuzzleSolved);

		// CHECK IF THE TWO ARRAYS ARE EQUALS
		if (puzzleOrder.join("") === slideAnswer.join("")) {
			setTimeout(() => {
				fadeOutElement(true);
			}, 1000);
		}
	};

	return {itemHandler, positionOfElelement};
};

export default useSlidePuzzle;
