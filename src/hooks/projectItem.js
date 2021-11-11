const projectItemHandlers = (projects, currProject, setCurrProject) => {
	const leftButtonHandler = () => {
		const currIndex = projects.findIndex(project => project.name === currProject[0].name);
		if (currIndex > 0) {
			setCurrProject([projects[currIndex - 1]]);
		} else {
			setCurrProject([projects[projects.length - 1]]);
		}
	};

	const rightButtonHandler = () => {
		const currIndex = projects.findIndex(project => project.name === currProject[0].name);
		if (currIndex < projects.length - 1) {
			setCurrProject([projects[currIndex + 1]]);
		} else {
			setCurrProject([projects[0]]);
		}
	};

	return {
		leftButtonHandler,
		rightButtonHandler,
	};
};

export default projectItemHandlers;
