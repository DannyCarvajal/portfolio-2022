import {useState, useEffect} from "react";

const useRubikLogic = (colorArray, index, isRubikSolved, setIsRubikSolved, solution) => {
	const [colors, setColors] = useState(colorArray);
	const [currentPosition, setCurrentPosition] = useState(0);
	const [activeArrow, setActiveArrow] = useState(false);
	const colorHandler = position => {
		// RESTART COUNTER
		if (position === 8) setCurrentPosition(0);
		// RETURN FIRST COLORS AGAIN IF REACHED LAST COLOR
		if (position >= 6) return colors[position - 6];

		return colors[position];
	};

	const positionHandler = () => setCurrentPosition(currentPosition + 1);
	const showTipHandler = () => {
		const tip = document.querySelector(".logicSection__tip");
		tip.classList.add("showAnimation");
	};

	useEffect(() => {
		const newStatus = [...isRubikSolved];
		if (currentPosition === solution) {
			newStatus[index] = "t";
		} else {
			newStatus[index] = "f";
		}
		setIsRubikSolved(newStatus);
	}, [currentPosition]);

	// ONCLICK ARROW ANIMATION
	const arrowAnimation = () => {
		setActiveArrow(prev => !prev);
		setTimeout(() => {
			setActiveArrow(prev => !prev);
		}, 500);
	};

	return {
		colorHandler,
		currentPosition,
		positionHandler,
		showTipHandler,
		activeArrow,
		arrowAnimation,
	};
};

export default useRubikLogic;
