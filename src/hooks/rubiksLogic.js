import { useState, useEffect, useRef } from "react";

const useRubikLogic = () => {
	// RUBIKS HAS 3 COLUMNS AND EACH ONB HAS 3 COLORS
	const [isRubikSolved, setIsRubikSolved] = useState(["f", "f", "f"]);
	const checkIfSolved = () => !isRubikSolved.includes("f");
	const messageIndication = checkIfSolved() ? "Rubik's solved!" : "Fill all the squares with blue";

	// COLOR PUZZLE ARRAYS WITH THE SOLUTION (WHEN BLUE COLOR IS FILLED)
	const columnColors = [
		["b", "g", "b", "b", "b", "g"],
		["g", "b", "b", "b", "g", "b"],
		["g", "b", "g", "b", "b", "b"],
	];
	const solutions = [2, 1, 3];

	return {
		isRubikSolved,
		setIsRubikSolved,
		messageIndication,
		checkIfSolved,
		columnColors,
		solutions,
	};
};

const useRubikColumnLogic = (colorArray, index, isRubikSolved, setIsRubikSolved, solution) => {
	// const [colors, setColors] = useState(colorArray);
	const [currentPosition, setCurrentPosition] = useState(0);
	const colorHandler = position => {
		// RESTART COUNTER
		if (position === 8) setCurrentPosition(0);
		// RETURN FIRST COLORS AGAIN IF REACHED LAST COLOR
		if (position >= 6) return colorArray[position - 6];

		return colorArray[position];
	};

	const updatePosition = () => setCurrentPosition(currentPosition + 1);
	useEffect(() => {
		const newStatus = [...isRubikSolved];
		if (currentPosition === solution) {
			newStatus[index] = "t";
		} else {
			newStatus[index] = "f";
		}
		setIsRubikSolved(newStatus);
	}, [currentPosition]);

	return {
		colorHandler,
		currentPosition,
		updatePosition,
	};
};

const useRubikAnimations = () => {
	const gameStarted = useRef(false);
	const [activeArrow, setActiveArrow] = useState(false);

	const showTipHandler = () => (gameStarted.current = true);

	// ONCLICK ARROW ANIMATION
	const arrowAnimation = () => {
		setActiveArrow(prev => !prev);
		setTimeout(() => {
			setActiveArrow(prev => !prev);
		}, 500);
	};

	return {
		showTipHandler,
		activeArrow,
		arrowAnimation,
		gameStarted,
	};
};

export default useRubikLogic;
export { useRubikAnimations, useRubikColumnLogic };
