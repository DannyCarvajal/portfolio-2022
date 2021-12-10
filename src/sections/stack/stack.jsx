import { useState } from "react";
// LOGIC
import slidePuzzleGenerator from "hooks/slidePuzzleGenerator.js";
import useSlidePuzzleAdditionals, { useScreenSize } from "hooks/additionals";
// COMPONENTS
import TabletDesktopStack from "./TabletDesktopStack";
import MobileStack from "./MobileStack";
// STYLES
import "./stack.scss";

const Stack = () => {
	// PUZZLE INITIALIZATION
	const { newPuzzleCombination, solution } = slidePuzzleGenerator();
	const [currentOrder, setCurrentOrder] = useState(newPuzzleCombination());
	// IS PUZZLE SOLVED?
	const [isSlidePuzzleSolved, setIsSlidePuzzleSolved] = useState(false);

	// ADITTIONAL FUNCTIONS
	const { activeAnimation, startAnimation } = useSlidePuzzleAdditionals(setIsSlidePuzzleSolved);
	const [isTabletOrDesktop] = useScreenSize();

	// INTERACTIVE FUNCTIONS
	const mixPuzzleAgain = () => {
		startAnimation(false);
		setCurrentOrder(newPuzzleCombination());
	};

	if (isTabletOrDesktop && !isSlidePuzzleSolved) {
		return (
			<section className={"technologiesSection " + (activeAnimation ? "activeAnimation" : "")}>
				<TabletDesktopStack
					setIsSlidePuzzleSolved={setIsSlidePuzzleSolved}
					currentOrder={currentOrder}
					setCurrentOrder={setCurrentOrder}
					solution={solution}
					startAnimation={startAnimation}
				/>
			</section>
		);
	} else {
		return (
			<section
				className={"technologiesSection solved " + (activeAnimation ? "activeAnimation" : "")}
			>
				<MobileStack
					mixPuzzleAgain={mixPuzzleAgain}
					isSlidePuzzleSolved={isSlidePuzzleSolved}
					isTabletOrDesktop={isTabletOrDesktop}
				/>
			</section>
		);
	}
};

export default Stack;
