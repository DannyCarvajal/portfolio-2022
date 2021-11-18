import {useState} from "react";
// COMPONENTS
import Rubik from "../../components/rubiks/Rubik";
import SecretWord from "../../components/global/Secretword";
import ClickIndication from "../../components/global/ClickIndication";
import AlertIndication from "../../components/global/AlertIndication";
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
				When I was a child I met the Rubik's cube. I really liked it and my interest for <i>puzzles</i> leaded me to try chess and got me closer to the <b>Front-End</b> development. Your portfolio is like your home and that's why you'll find in here some mini-puzzles to make a secret word, good luck....
			</p>
			<div className="logicSection__puzzleContainer">
				{columnColors.map((column, index) => (
					<Rubik colorArray={columnColors[index]} index={index} isRubikSolved={isRubikSolved} setIsRubikSolved={setIsRubikSolved} solution={solutions[index]} rubikItemClass="colorItem" key={column.join("")} />
				))}
				<ClickIndication message="Press the arrows.." containerClass="logicIndicator" elemntsToFade=".downArrowRubik" />
			</div>
			<p className="logicSection__tip">{messageIndication}</p>
			{/* ANIMATION OF SOLVED */}
			{checkIfSolved() && <AlertIndication found="r" message="Letter Found" bgcolor="#353841" />}
			<SecretWord secretLetter={checkIfSolved() ? "r" : ""} bgcolor="#353841" letterColor="white" animation={checkIfSolved() ? "animation" : ""} />
		</section>
	);
};

export default Logic;
