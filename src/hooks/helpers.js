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

	const fadeOutElement = (setActiveAnimation, booleanSolved) => {
		setActiveAnimation(true);
		setTimeout(() => setIsSlidePuzzleSolved(booleanSolved), 1250);
		setTimeout(() => setActiveAnimation(false), 2500);
	};

	return {useScreenSize, fadeOutElement};
};

export default additionalSlideFunc;
