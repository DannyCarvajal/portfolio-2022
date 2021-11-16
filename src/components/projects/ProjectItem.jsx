import "./projectitem.scss";
import BehanceContact from "../../assets/img/behancespacecontact.svg";
import WebContact from "../../assets/img/webspacecontact.png";
import GithubContact from "../../assets/img/githubspacecontact.png";
import projectItemHandlers from "../../hooks/projectItem";

const ProjectItem = ({image, name, links, description, projects, currProject, setCurrProject}) => {
	const {leftButtonHandler, rightButtonHandler} = projectItemHandlers(projects, currProject, setCurrProject);

	return (
		<div className="projectItem">
			<div className="projectItem__description">
				<div className="projectItem__linksContainer">
					<h3 className="title">{name}</h3>
					{links.map((link, index) => {
						return (
							<a href={link} key={link} target="_blank" rel="noreferrer">
								<img src={index === 0 ? GithubContact : index === 1 ? WebContact : BehanceContact} alt="ContactLink" height="30px" />
							</a>
						);
					})}
				</div>
				<p>{description}</p>
			</div>
			<div className="projectItem__imgContainer">
				<img src={image} alt={name} className="projectimage" />
			</div>
			<div className="projectItem__projectButtons">
				<button className="leftButton" onClick={leftButtonHandler}>
					<i className="fas fa-arrow-left"></i>
				</button>
				<button className="rightButton" onClick={rightButtonHandler}>
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
		</div>
	);
};

export default ProjectItem;
