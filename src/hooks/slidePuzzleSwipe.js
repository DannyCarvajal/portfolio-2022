import {useState, useEffect} from "react";

import additionalSlideFunc from "./helpers";

const useSlidePuzzle = (item, currentOrder, setIsSlidePuzzleSolved, setCurrentOrder) => {
	const DIMENSIONS_SLIDE_ITEM = (450 - 40) / 3; /* CONTAINERWIDTH - PADDING / ITEMS PER ROW */
	const CONTAINERPADDING = 40 / 2;

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
		return possibleIndexes.filter(index => currentOrder[index] === "blank");
	};

	function positionOfElelement(item) {
		let line = Math.floor(currentOrder.indexOf(item) / 3);
		let position = currentOrder.indexOf(item) % 3;
		return [line, position, DIMENSIONS_SLIDE_ITEM * line + CONTAINERPADDING, DIMENSIONS_SLIDE_ITEM * position + CONTAINERPADDING];
	}

	function lineAndPositionToIndex(line, position) {
		return line * 3 + position;
	}

	const checkCompleted = () => {
		let slideAnswer = ["html", "css", "javascript", "sass", "git", "figma", "react", "daniel", "blank"];
		let {fadeOutElement} = additionalSlideFunc(setIsSlidePuzzleSolved);

		// CHECK IF THE TWO ARRAYS ARE EQUALS
		if (currentOrder.join("") === slideAnswer.join("")) {
			setTimeout(() => {
				fadeOutElement(true);
			}, 500);
		}
	};

	return {checkCompleted, checkIfAllowedMovement, positionOfElelement, lineAndPositionToIndex};
};

export default useSlidePuzzle;
