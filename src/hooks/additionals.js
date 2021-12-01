import {useState, useEffect} from "react";

const useAdditionalSlideFunc = setIsSlidePuzzleSolved => {
	const [activeAnimation, setActiveAnimation] = useState(false);
	const startAnimation = booleanSolved => {
		setActiveAnimation(true);
		setTimeout(() => setIsSlidePuzzleSolved(booleanSolved), 1250);
		setTimeout(() => setActiveAnimation(false), 2500);
	};

	return {activeAnimation, startAnimation};
};

const useScreenSize = () => {
	const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(window.innerWidth > 700);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100);
	const handleResize = () => {
		if (window.innerWidth > 700) {
			setIsTabletOrDesktop(true);
		} else {
			setIsTabletOrDesktop(false);
		}

		if (window.innerWidth > 1100) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isTabletOrDesktop, isDesktop]);

	return [isTabletOrDesktop, isDesktop];
};

export default useAdditionalSlideFunc;
export {useScreenSize};
