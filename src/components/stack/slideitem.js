import "./slideitem.scss";
import useSlidePuzzle from "../hooks/slidePuzzle";

const PuzzleItem = ({item, listOfItems}) => {
	const {itemHandler, positionOfElelement, checkCompleted} = useSlidePuzzle(listOfItems);

	let isEmptyElement = item === "blank" ? "emptyElement " : "";
	let [, , top, left] = positionOfElelement(item);

	return (
		<div id={item} className={"tech-item " + isEmptyElement} onClick={itemHandler} style={{top, left}}>
			<div className="tech-item__icon">
				<img alt={item} />
			</div>
			<div className="tech-item__name">{item}</div>
		</div>
	);
};

export default PuzzleItem;
