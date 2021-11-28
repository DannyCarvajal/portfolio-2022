import React, {useState} from "react";
// COMPONENTS
import ProjectItem from "../../components/projects/ProjectItem";
// LOGIC
import {useScreenSize} from "../../hooks/helpers";
import projectList from "../../constants/projectList";
// STYLES
import "./projects.scss";

const Projects = () => {
	// SEE SCREEN SIZE
	const [isTabletOrDesktop] = useScreenSize();

	const [projects, setProjects] = useState(projectList);
	const [currProject, setCurrProject] = useState([projectList[0]]);

	const Projects = projects => {
		return projects.map(project => {
			let nameWithoutSpacesOrCases = project.name.replace(/\s/g, "").toLowerCase();
			return <ProjectItem key={project.name} image={process.env.PUBLIC_URL + `/img/${nameWithoutSpacesOrCases}.webp`} name={project.name} links={project.links} description={project.description} currProject={currProject} setCurrProject={setCurrProject} projects={projectList} />;
		});
	};

	return (
		<div className="projectsSection">
			<h2 className="projectsSection__title">Projects</h2>
			<div className="projectItemContainer">{isTabletOrDesktop ? Projects(currProject) : Projects(projects)}</div>
		</div>
	);
};

export default Projects;
