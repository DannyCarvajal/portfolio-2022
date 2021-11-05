import {useEffect, useState} from "react";
import Rubik from "../../components/rubiks/rubik";
import SecretWord from "../../components/global/secretword";
import ClickIndication from "../../components/global/clickIndication";
import "./logicSection.scss";

const Logic = () => {
	const [isRubikSolved, setIsRubikSolved] = useState(["f", "f", "f"]);
	const checkIfSolved = () => !isRubikSolved.includes("f");

	// COLOR PUZZLE ARRAYS
	const columnColors = [
		["b", "g", "b", "b", "b", "g"],
		["g", "b", "b", "b", "g", "b"],
		["g", "b", "g", "b", "b", "b"],
	];

	const solutions = [2, 1, 3];

	useEffect(() => {
		checkIfSolved() && console.log("SOLVED!");
	});

	return (
		<div className="logicSection">
			<img src="img/decorationLine.png" alt="decorationLine" className="logicSection__decorationLine" />
			<p className="logicSection__story">
				Since I was a child I spent time solving <b>puzzles</b> , from the Rubik’s cube to chess. You know you are having fun because you can be with puzzles for a long time, ‘til you find the next big challenge...
			</p>
			<div className="logicSection__puzzleContainer">
				{columnColors.map((column, index) => (
					<Rubik colorArray={columnColors[index]} index={index} isRubikSolved={isRubikSolved} setIsRubikSolved={setIsRubikSolved} solution={solutions[index]} rubikItemClass="colorItem" key={column.join("")} />
				))}
				<ClickIndication message="Try pressing something.." containerClass="logicIndicator" />
			</div>
			<SecretWord secretLetter={checkIfSolved() === true ? "m" : ""} bgcolor="#353841" letterColor="white" />
		</div>
	);
};

export default Logic;
