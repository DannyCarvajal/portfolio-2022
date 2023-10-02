// COMPONENTS
import SlidePuzzle from "components/stack/slidePuzzle";
import SecretWord from "components/global/Secretword";
import PuzzleInteraction from "components/stack/puzzleInteraction";
// STYLES
import "./stack.scss";
// IMAGES
import Queen from "assets/img/queen.svg";
import ChessBg from "assets/img/chessbg.svg";

const TabletDesktopStack = ({
  setIsSlidePuzzleSolved,
  currentOrder,
  setCurrentOrder,
  solution,
  startAnimation,
}) => {
  return (
    <>
      <header>
        <h2 className="technologiesSection__title">Technologies</h2>
      </header>
      <p className="technologiesSection__description">
        Your technologies <b>stack</b>
        <br />
        are the pieces of your <b>game</b>
      </p>
      <img
        src={ChessBg}
        alt="chessbg"
        className="technologiesSection__chessbg"
      />
      <SlidePuzzle
        setIsSlidePuzzleSolved={setIsSlidePuzzleSolved}
        currentOrder={currentOrder}
        setCurrentOrder={setCurrentOrder}
        solution={solution}
        solvedHandler={() => startAnimation(true)}
      />

      <div className="technologiesSection__interactionContainer">
        <PuzzleInteraction
          description="Automatic solve"
          handler={() => startAnimation(true)}
          image={Queen}
          keyWord=""
        />
      </div>

      <SecretWord secretLetter="" />
    </>
  );
};

export default TabletDesktopStack;
