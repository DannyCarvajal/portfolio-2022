// 	STYLES
import "./projectitem.scss";
// COMPONENTS
import SpecificLinks from "../global/SpecificLinks";
import ProjectButtons from "./ProjectButtons";
// LOGIC
import projectItemHandlers from "../../hooks/projectItem";

const ProjectItem = ({
	image,
	name,
	links,
	description,
	projects,
	currProject,
	setCurrProject,
}) => {
	const { leftBtnHandler, rightBtnHandler, iconLinks } = projectItemHandlers(
		projects,
		currProject,
		setCurrProject,
		links
	);

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
			<div className="projectItem__imgContainer">
				{links[1] ? <ImageAnchor /> : <img src={image} alt={name} className="projectimage" />}
			</div>
			<ProjectButtons leftBtnHandler={leftBtnHandler} rightBtnHandler={rightBtnHandler} />
		</div>
	);
};

export default ProjectItem;
