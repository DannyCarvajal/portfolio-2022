// COMPONENTS
import Rubik from "components/rubiks/rubik";
import CheckSecretWord from "components/global/checkSecretWord";
import ClickIndication from "components/global/clickIndication";
import DecorationLine from "components/global/DecorationLine";
// STYLES
import "./logicSection.scss";
// CONSTANTS
import { PUZZLES_TEXT } from "constants/puzzlesText";
// LOGIC
import useRubikLogic, { useRubikAnimations } from "hooks/rubiksLogic";

const Logic = () => {
  const {
    columnColors,
    solutions,
    messageIndication,
    isRubikSolved,
    setIsRubikSolved,
    checkIfSolved,
  } = useRubikLogic();

  // INDICATION MESSAGE
  const { gameStarted, showTipHandler } = useRubikAnimations();
  const showIndicationMessage = gameStarted.current ? "showAnimation" : "";

  return (
    <section className="logicSection">
      <DecorationLine />
      <p
        className="logicSection__story"
        dangerouslySetInnerHTML={{ __html: PUZZLES_TEXT["logic"] }}
      ></p>
      <div className="logicSection__puzzleContainer">
        {columnColors.map((column, index) => (
          <Rubik
            columnColors={column}
            index={index}
            isRubikSolved={isRubikSolved}
            setIsRubikSolved={setIsRubikSolved}
            Columnsolution={solutions[index]}
            key={column.join("")}
            showTip={showTipHandler}
          />
        ))}
        <ClickIndication
          message="Press the arrows"
          containerClass="logicIndicator"
          elemntsToFade=".downArrowRubik"
        />
        <p className={`logicSection__tip ${showIndicationMessage}`}>
          {messageIndication}
        </p>
      </div>
      <CheckSecretWord
        solved={checkIfSolved()}
        letter="r"
        bgColor="SMOOTH_BLACK"
      />
      {checkIfSolved() && (
        <p className="logicSection__boxIndication">
          <i class="fas fa-lightbulb"></i>
          Your letters found will appear in small boxes
        </p>
      )}
    </section>
  );
};

export default Logic;
