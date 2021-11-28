const projectItemHandlers = (projects, currProject, setCurrProject, links) => {
	const leftBtnHandler = () => {
		const currIndex = projects.findIndex(project => project.name === currProject[0].name);
		if (currIndex > 0) {
			setCurrProject([projects[currIndex - 1]]);
		} else {
			setCurrProject([projects[projects.length - 1]]);
		}
	};

	const rightBtnHandler = () => {
		const currIndex = projects.findIndex(project => project.name === currProject[0].name);
		if (currIndex < projects.length - 1) {
			setCurrProject([projects[currIndex + 1]]);
		} else {
			setCurrProject([projects[0]]);
		}
	};

	const linkType = link => {
		if (link.includes("behance")) {
			return "behance";
		} else if (link.includes("github.com")) {
			return "github";
		}
		return "web";
	};

	const iconLinks = links.map(link => {
		let icon = linkType(link);
		return [icon, link];
	});

	return {
		leftBtnHandler,
		rightBtnHandler,
		iconLinks,
	};
};

export default projectItemHandlers;
