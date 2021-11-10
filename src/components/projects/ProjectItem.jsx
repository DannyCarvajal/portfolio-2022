import "./projectitem.scss";
import BehanceContact from "../../assets/img/behancecontact";
import LinkedinContact from "../../assets/img/linkedincontact";
import GithubContact from "../../assets/img/githubcontact";

const ProjectItem = ({image, name, links, description}) => {
	return (
		<div className="projectItem">
			<div className="projectItem__imgContainer">
				<img src={image} alt={name} />
				<div className="projectitem__linksContainer">
					{links.map((link, index) => {
						return <a href={link}>{link}</a>;
					})}
				</div>
			</div>
			<div className="projectItem__description">
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ProjectItem;
