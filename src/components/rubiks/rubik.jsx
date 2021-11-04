import {useState, useEffect} from "react";
import "./rubik.scss";

const Rubik = ({colorArray, index, isRubikSolved, setIsRubikSolved, solution, rubikItemClass}) => {
	const [colors, setColors] = useState(colorArray);
	const [currentPosition, setCurrentPosition] = useState(0);
	const colorHandler = position => {
		// RESTART COUNTER
		if (position === 8) setCurrentPosition(0);
		// RETURN FIRST COLORS AGAIN IF REACHED LAST COLOR
		if (position >= 6) return colors[position - 6];

		return colors[position];
	};

	const positionHandler = () => setCurrentPosition(currentPosition + 1);

	useEffect(() => {
		const newStatus = [...isRubikSolved];
		if (currentPosition === solution) {
			newStatus[index] = "t";
		} else {
			newStatus[index] = "f";
		}
		setIsRubikSolved(newStatus);
	}, [currentPosition]);

	return (
		<>
			<div className="rubiksColumn">
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 0)}`}></div>
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 1)}`}></div>
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 2)}`}></div>
				<button className="rubikscta" onClick={positionHandler}></button>
			</div>
		</>
	);
};

export default Rubik;
