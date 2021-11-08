import {useState, useEffect} from "react";
import "./rubik.scss";

const Rubik = ({colorArray, index, isRubikSolved, setIsRubikSolved, solution, rubikItemClass}) => {
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
	const hideHandIndicator = () => {
		const handIndicator = document.querySelector(".clickIndication");
		handIndicator.classList.add("hideAnimation");
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
	return (
		<>
			<div className="rubiksColumn">
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 0)} ${activeArrow ? "active" : ""}`}></div>
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 1)} ${activeArrow ? "active" : ""}`}></div>
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 2)} ${activeArrow ? "active" : ""}`}></div>
				<button
					className="rubikscta"
					onClick={() => {
						positionHandler();
						hideHandIndicator();
						arrowAnimation();
					}}
				>
					<i className={"fas fa-arrow-down " + (activeArrow ? "active" : "")}></i>
				</button>
			</div>
		</>
	);
};

export default Rubik;
