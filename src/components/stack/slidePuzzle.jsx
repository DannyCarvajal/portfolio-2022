import PuzzleItem from "./slidePuzzleItem.jsx";
import SlideItemBg from "./slideItemBg.jsx";
import "./slidePuzzle.scss";

const SlidePuzzle = ({setIsSlidePuzzleSolved, currentOrder, solution, setCurrentOrder}) => {
	return (
		<div className="slidePuzzleContainer">
			{solution.map(item => {
				return <SlideItemBg key={item + "bg"} item={item} />;
			})}

			{currentOrder.map(item => {
				return <PuzzleItem item={item} puzzleOrder={currentOrder} setIsSlidePuzzleSolved={setIsSlidePuzzleSolved} key={item} setCurrentOrder={setCurrentOrder} />;
			})}
		</div>
	);
};

export default SlidePuzzle;
