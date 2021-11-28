// 	STYLES
import "./projectitem.scss";
// COMPONENTS
import SpecificLinks from "../global/SpecificLinks";
// LOGIC
import projectItemHandlers from "../../hooks/projectItem";

const ProjectItem = ({image, name, links, description, projects, currProject, setCurrProject}) => {
	const {leftBtnHandler, rightBtnHandler, iconLinks} = projectItemHandlers(projects, currProject, setCurrProject, links);

	const ImageAnchor = () => (
		<a href={links[1]} target="_blank" rel="noreferrer">
			<img src={image} alt={name} className="projectimage" />
		</a>
	);

	return (
		<div className="projectItem">
			<div className="projectItem__description">
				<div className="projectItem__linksContainer">
					<h3 className="title">{name}</h3>
					<SpecificLinks contacts={iconLinks} color="WHITE" size="mini" />
				</div>
				<p>{description}</p>
			</div>
			<div className="projectItem__imgContainer">{links[1] ? <ImageAnchor /> : <img src={image} alt={name} className="projectimage" />}</div>
			<div className="projectItem__projectButtons">
				<button className="leftButton" onClick={leftBtnHandler} aria-label="leftButton">
					<i className="fas fa-arrow-left"></i>
				</button>
				<button className="rightButton" onClick={rightBtnHandler} aria-label="rightButton">
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
		</div>
	);
};

export default ProjectItem;
