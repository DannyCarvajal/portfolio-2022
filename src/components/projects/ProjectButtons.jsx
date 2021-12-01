// STYLES
import "./projectButtons.scss";

const ProjectButtons = ({ leftBtnHandler, rightBtnHandler }) => {
	return (
		<div className="projectButtons">
			<button className="leftButton" onClick={leftBtnHandler} aria-label="leftButton">
				<i className="fas fa-arrow-left"></i>
			</button>
			<button className="rightButton" onClick={rightBtnHandler} aria-label="rightButton">
				<i className="fas fa-arrow-right"></i>
			</button>
		</div>
	);
};

export default ProjectButtons;
