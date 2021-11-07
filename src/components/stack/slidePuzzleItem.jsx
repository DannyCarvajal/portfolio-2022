import "./slidePuzzleItem.scss";
import useSlidePuzzle from "../../hooks/slidePuzzleSwipe";

const PuzzleItem = ({item, currentOrder, setIsSlidePuzzleSolved, setCurrentOrder}) => {
	const {itemHandler, positionOfElelement} = useSlidePuzzle(currentOrder, setIsSlidePuzzleSolved, setCurrentOrder);

	let isEmptyElement = item === "blank" ? "emptyElement " : "";
	let [, , top, left] = positionOfElelement(item);
	const preventDragHandler = e => e.preventDefault();

	return (
		<div id={item} className={"tech-item " + isEmptyElement} onClick={itemHandler} style={{top, left}} onMouseDown={preventDragHandler}>
			<img src={process.env.PUBLIC_URL + `/img/${item}.svg`} alt={item} height={item === "daniel" ? "35spx" : "50px"} />
		</div>
	);
};

export default PuzzleItem;
