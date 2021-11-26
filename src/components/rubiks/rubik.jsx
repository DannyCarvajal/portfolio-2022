// STYLES
import "./rubik.scss";
// LOGIC
import useRubikLogic from "../../hooks/rubiksLogic";

const Rubik = ({colorArray, index, isRubikSolved, setIsRubikSolved, solution, rubikItemClass}) => {
	const {colorHandler, currentPosition, activeArrow, positionHandler, showTipHandler, arrowAnimation} = useRubikLogic(colorArray, index, isRubikSolved, setIsRubikSolved, solution);

	return (
		<>
			<div className="rubiksColumn">
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 0)} ${activeArrow ? "active" : ""}`}></div>
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 1)} ${activeArrow ? "active" : ""}`}></div>
				<div className={`${rubikItemClass} ${colorHandler(currentPosition + 2)} ${activeArrow ? "active" : ""}`}></div>
				<button
					className="rubikscta downArrowRubik"
					onClick={() => {
						positionHandler();
						showTipHandler();
						arrowAnimation();
					}}
					aria-label="Down arrow"
				>
					<i className={"fas fa-arrow-down " + (activeArrow ? "active" : "")}></i>
				</button>
			</div>
		</>
	);
};

export default Rubik;
