// STYLES
import "./rubik.scss";
// LOGIC
import {useRubikAnimations, useRubikColumnLogic} from "../../hooks/rubiksLogic";

const Rubik = ({columnColors, index, isRubikSolved, setIsRubikSolved, Columnsolution, showTip}) => {
	const {colorHandler, currentPosition, updatePosition} = useRubikColumnLogic(columnColors, index, isRubikSolved, setIsRubikSolved, Columnsolution);

	const {activeArrow, arrowAnimation} = useRubikAnimations();

	return (
		<div className={`rubiksColumn ${activeArrow ? "active" : ""}`}>
			<div className={`colorItem ${colorHandler(currentPosition)}`}></div>
			<div className={`colorItem ${colorHandler(currentPosition + 1)}`}></div>
			<div className={`colorItem ${colorHandler(currentPosition + 2)}`}></div>
			<button
				className="rubikscta downArrowRubik"
				onClick={() => {
					updatePosition();
					showTip();
					arrowAnimation();
				}}
				aria-label="Down arrow"
			>
				<i className={"fas fa-arrow-down " + (activeArrow ? "active" : "")}></i>
			</button>
		</div>
	);
};

export default Rubik;
