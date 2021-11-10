import ProjectItem from "../../components/projects/ProjectItem";
import Gifos from "../../assets/img/gifos.png";
import Relyer from "../../assets/img/relyer.png";
import "./projects.scss";

const Projects = () => {
	return (
		<div className="projectsSection">
			<h2 className="projectsSection__title">Projects</h2>
			<div className="projectItemContainer">
				<ProjectItem image={Gifos} name={"Gifos"} links={"www.behance.net"} description={"Excelent bruh"} />
			</div>
		</div>
	);
};

export default Projects;
