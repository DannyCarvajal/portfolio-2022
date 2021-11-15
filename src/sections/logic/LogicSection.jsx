import {useState} from "react";
// COMPONENTS
import Rubik from "../../components/rubiks/Rubik";
import SecretWord from "../../components/global/Secretword";
import ClickIndication from "../../components/global/ClickIndication";
import AlertIndication from "../../components/global/alertIndication";
// STYLES
import "./logicSection.scss";
// IMAGES
import DecorationLine from "../../assets/img/decorationLine.png";

const Logic = () => {
	const [isRubikSolved, setIsRubikSolved] = useState(["f", "f", "f"]);
	const checkIfSolved = () => !isRubikSolved.includes("f");
	const messageIndication = checkIfSolved() ? "Rubik's solved!" : "Fill all the squares with blue";

	// COLOR PUZZLE ARRAYS
	const columnColors = [
		["b", "g", "b", "b", "b", "g"],
		["g", "b", "b", "b", "g", "b"],
		["g", "b", "g", "b", "b", "b"],
	];

	const solutions = [2, 1, 3];

	return (
		<section className="logicSection">
			<img src={DecorationLine} alt="decorationLine" className="logicSection__decorationLine" />
			<p className="logicSection__story">
				Since I was a child I loved <b>puzzles </b> , from the Rubik’s cube to chess. There’s no thing such as seen your problem solved, and I feel something similar as a <b>Front-End developer</b> , but there’s always more....
			</p>
			<div className="logicSection__puzzleContainer">
				{columnColors.map((column, index) => (
					<Rubik colorArray={columnColors[index]} index={index} isRubikSolved={isRubikSolved} setIsRubikSolved={setIsRubikSolved} solution={solutions[index]} rubikItemClass="colorItem" key={column.join("")} />
				))}
				<ClickIndication message="Press the arrows.." containerClass="logicIndicator" elemntsToFade=".downArrowRubik" />
			</div>
			<p className="logicSection__tip">{messageIndication}</p>
			{/* ANIMATION OF SOLVED */}
			{checkIfSolved() && <AlertIndication found="i" message="Letter Found" bgcolor="#353841" />}
			<SecretWord secretLetter={checkIfSolved() ? "i" : ""} bgcolor="#353841" letterColor="white" animation={checkIfSolved() ? "animation" : ""} />
		</section>
	);
};

export default Logic;
