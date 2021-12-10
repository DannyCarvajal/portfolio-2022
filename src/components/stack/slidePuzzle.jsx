// COMPONENTS
import PuzzleItem from "./SlidePuzzleItem.jsx";
import SlideItemBg from "./SlideItemBg.jsx";
import ClickIndication from "components/global/ClickIndication.jsx";
// STYLES
import "./slidePuzzle.scss";

const SlidePuzzle = ({
	setIsSlidePuzzleSolved,
	currentOrder,
	solution,
	setCurrentOrder,
	solvedHandler,
}) => {
	return (
		<div className="slidePuzzleContainer">
			{solution.map(item => {
				return <SlideItemBg key={item + "bg"} item={item} />;
			})}

			{currentOrder.map(item => {
				return (
					<PuzzleItem
						item={item}
						currentOrder={currentOrder}
						setIsSlidePuzzleSolved={setIsSlidePuzzleSolved}
						key={item}
						setCurrentOrder={setCurrentOrder}
						solution={solution}
						solvedHandler={solvedHandler}
					/>
				);
			})}
			<ClickIndication
				message="Click to slide"
				containerClass="slideIndicator"
				elemntsToFade=".slideToFadeHand"
			/>
		</div>
	);
};

export default SlidePuzzle;
