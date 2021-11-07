import {useState, useEffect} from "react";

const additionalSlideFunc = setIsSlidePuzzleSolved => {
	const useScreenSize = () => {
		const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(window.innerWidth > 700);
		useEffect(() => {
			const handleResize = () => {
				if (window.innerWidth > 700) {
					setIsTabletOrDesktop(true);
				} else {
					setIsTabletOrDesktop(false);
				}
			};
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, [isTabletOrDesktop]);

		return [isTabletOrDesktop];
	};

	const fadeOutElement = booleanSolved => {
		const techSection = document.getElementsByClassName("technologiesSection")[0];
		techSection.classList.add("technologiesSection--solved");
		setTimeout(() => setIsSlidePuzzleSolved(booleanSolved), 1250);
		setTimeout(() => techSection.classList.remove("technologiesSection--solved"), 2500);
	};

	return {useScreenSize, fadeOutElement};
};

export default additionalSlideFunc;
