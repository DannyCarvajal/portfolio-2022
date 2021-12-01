import { useState } from "react";
// COMPONENTS
import ProjectItem from "../../components/projects/ProjectItem";
// LOGIC
import { useScreenSize } from "../../hooks/additionals";
import PROJECT_LIST from "../../constants/projectList";
// STYLES
import "./projects.scss";

const Projects = () => {
	const [isTabletOrDesktop] = useScreenSize();
	const [currProject, setCurrProject] = useState([PROJECT_LIST[0]]);

	const Projects = projects => {
		return projects.map(project => {
			let nameWithoutSpacesOrCases = project.name.replace(/\s/g, "").toLowerCase();
			return (
				<ProjectItem
					key={project.name}
					image={process.env.PUBLIC_URL + `/img/${nameWithoutSpacesOrCases}.webp`}
					name={project.name}
					links={project.links}
					description={project.description}
					currProject={currProject}
					setCurrProject={setCurrProject}
					projects={PROJECT_LIST}
				/>
			);
		});
	};

	return (
		<div className="projectsSection">
			<h2 className="projectsSection__title">Projects</h2>
			<div className="projectItemContainer">
				{isTabletOrDesktop ? Projects(currProject) : Projects(PROJECT_LIST)}
			</div>
		</div>
	);
};

export default Projects;
