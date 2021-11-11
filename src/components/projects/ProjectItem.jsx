import "./projectitem.scss";
import BehanceContact from "../../assets/img/behancecontact.svg";
import WebContact from "../../assets/img/webcontact.svg";
import GithubContact from "../../assets/img/githubcontact.svg";

const ProjectItem = ({image, name, links, description}) => {
	return (
		<div className="projectItem">
			<div className="projectItem__description">
				<h3 className="title">{name}</h3>
				<p>{description}</p>
			</div>
			<div className="projectItem__imgContainer">
				<img src={image} alt={name} className="projectimage" />
				<div className="projectItem__linksContainer">
					{links.map((link, index) => {
						return (
							<a href={link} key={link} target="_blank" rel="noreferrer">
								<img src={index === 0 ? GithubContact : index === 1 ? WebContact : BehanceContact} alt="ContactLink" height="35px" />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
