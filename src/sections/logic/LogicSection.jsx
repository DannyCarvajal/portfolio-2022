import {useState} from "react";
// COMPONENTS
import Rubik from "../../components/rubiks/Rubik";
import CheckSecretWord from "../../components/global/CheckSecretWord";
import ClickIndication from "../../components/global/ClickIndication";
import DecorationLine from "../../components/global/DecorationLine";
// STYLES
import "./logicSection.scss";
// CONSTANTS
import {PUZZLES_TEXT} from "../../constants/puzzlesText";
// LOGIC
import useRubikLogic, {useRubikAnimations} from "../../hooks/rubiksLogic";

const Logic = () => {
	const {columnColors, solutions, messageIndication, isRubikSolved, setIsRubikSolved, checkIfSolved} = useRubikLogic();

	// INDICATION MESSAGE
	const {gameStarted, showTipHandler} = useRubikAnimations();
	const showIndicationMessage = gameStarted.current ? "showAnimation" : "";

	return (
		<section className="logicSection">
			<DecorationLine />
			<p className="logicSection__story" dangerouslySetInnerHTML={{__html: PUZZLES_TEXT["logic"]}}></p>
			<div className="logicSection__puzzleContainer">
				{columnColors.map((column, index) => (
					<Rubik columnColors={column} index={index} isRubikSolved={isRubikSolved} setIsRubikSolved={setIsRubikSolved} Columnsolution={solutions[index]} key={column.join("")} showTip={showTipHandler} />
				))}
				<ClickIndication message="Press the arrows.." containerClass="logicIndicator" elemntsToFade=".downArrowRubik" />
			</div>
			<p className={`logicSection__tip ${showIndicationMessage}`}>{messageIndication}</p>
			<CheckSecretWord solved={checkIfSolved()} letter="r" bgColor="SMOOTH_BLACK" />
		</section>
	);
};

export default Logic;
