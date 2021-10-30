const useSlidePuzzle = listOfItems => {
	const itemHandler = e => {
		let item = e.target.id;
		// CHECK IF ELEMENT CAN MOVE
		let [allowedMove] = checkIfAllowedMovement(item);
		// IF A MOVE IS ALLOWED SWIPE THE ELEMENTS
		if (allowedMove === 0 || allowedMove) {
			slideItem(e.target, item, allowedMove);
			// CHECK IF THE GAME IS FINISHED
			checkCompleted();
		}
	};

	const checkIfAllowedMovement = item => {
		let [line, position] = positionOfElelement(item);
		let possibleIndexes = [];

		// CHECK UP DOWN LEFT AND RIGHT AND CHECK IF ELEMENT EXISTS
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
		return possibleIndexes.filter(index => listOfItems[index] === "blank");
	};

	const positionOfElelement = item => {
		let line = Math.floor(listOfItems.indexOf(item) / 3);
		let position = listOfItems.indexOf(item) % 3;
		return [line, position, 200 * line, 200 * position];
	};

	const lineAndPositionToIndex = (line, position) => line * 3 + position;

	const slideItem = (itemElement, item, indexBlank) => {
		let indexItem = listOfItems.indexOf(item);
		const blankElement = document.getElementsByClassName("emptyElement")[0];
		// MOVE THE ITEMS WITH TRANSITION FOR BETTER PERFORMANCE
		let [, , top, left] = positionOfElelement(item);
		let [elementTranslation, blankTranslation] = translationMovement([top, left], [+blankElement.style.top.slice(0, -2), +blankElement.style.left.slice(0, -2)]);
		itemElement.style.transform = elementTranslation;
		blankElement.style.transform = blankTranslation;

		// SWIPE THE ITEMS IN THE USEREF
		let swipedArray = listOfItems;
		swipedArray[indexBlank] = swipedArray.splice(indexItem, 1, "blank")[0];
		listOfItems = swipedArray;
		console.log(listOfItems);

		// UPDATE TOP AND LEFT OF ITEMS MOVED
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
			return [`translate(${newLeft - currentLeft}px)`, `translate(${currentLeft - newLeft}px)`];
		} else {
			return [`translate(0,${newTop - currentTop}px)`, `translate(0,${currentTop - newTop}px)`];
		}
	};

	const checkCompleted = () => {
		let slideAnswer = ["html", "css", "javascript", "sass", "git", "figma", "react", "daniel", "blank"];
		console.log("cheking...");

		// CHECK IF THE TWO ARRAYS ARE EQUALS
		if (listOfItems.join("") === slideAnswer.join("")) {
			setTimeout(() => {
				alert("You win!");
			}, 1000);
		}
	};

	return {itemHandler, positionOfElelement, checkCompleted};
};

export default useSlidePuzzle;
