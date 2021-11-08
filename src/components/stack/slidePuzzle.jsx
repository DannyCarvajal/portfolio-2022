import {useEffect} from "react";
import PuzzleItem from "./slidePuzzleItem.jsx";
import SlideItemBg from "./slideItemBg.jsx";
import ClickIndication from "../global/clickIndication.jsx";
import "./slidePuzzle.scss";

const SlidePuzzle = ({setIsSlidePuzzleSolved, currentOrder, solution, setCurrentOrder}) => {
	console.log("joined the slidepuzzle");

	useEffect(() => {
		console.log("I got a new current order in parent ", currentOrder);
	}, [currentOrder]);

	return (
		<div className="slidePuzzleContainer">
			{solution.map(item => {
				return <SlideItemBg key={item + "bg"} item={item} />;
			})}

			{currentOrder.map(item => {
				return <PuzzleItem item={item} currentOrder={currentOrder} setIsSlidePuzzleSolved={setIsSlidePuzzleSolved} key={item} setCurrentOrder={setCurrentOrder} />;
			})}
			<ClickIndication message="Click to slide" containerClass="slideIndicator" elemntsToFade=".slideToFadeHand" />
		</div>
	);
};

export default SlidePuzzle;
