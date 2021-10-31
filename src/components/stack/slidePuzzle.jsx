import {useState, useRef} from "react";
import PuzzleItem from "./components/techItem";
import usePuzzleGenerator from "../../hooks/slidePuzzleGenerator";
import "./slidePuzzle.scss";

const slidePuzzle = () => {
	const {puzzleGenerator} = usePuzzleGenerator();
	const initialItems = puzzleGenerator();

	const [puzzleItems, setPuzzleItems] = useState(initialItems);
	const listOfItems = useRef(initialItems);

	return (
		<div className="puzzleContainer">
			{puzzleItems.map(item => {
				return <PuzzleItem item={item} key={item} listOfItems={listOfItems.current} />;
			})}
		</div>
	);
};

export default slidePuzzle;
