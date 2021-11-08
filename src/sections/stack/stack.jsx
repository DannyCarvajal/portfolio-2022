import {useState, useEffect} from "react";
import {technologies, additionalTechnologies} from "./listOfTechnologies.js";
import slidePuzzleGenerator from "../../hooks/slidePuzzleGenerator.js";
import SlidePuzzle from "../../components/stack/slidePuzzle.jsx";
import TechCard from "../../components/stack/techCard.jsx";
import TechCircle from "../../components/stack/techCircleCard.jsx";
import SecretWord from "../../components/global/secretword.jsx";
import PuzzleInteraction from "../../components/stack/puzzleInteraction.jsx";
import slidePuzzleAdditionals from "../../hooks/slidePuzzleAdditionals";
import AlertIndication from "../../components/global/alertIndication.jsx";
import "./stack.scss";
// IMAGES
import Thunder from "../../assets/img/thunder.svg";
import Queen from "../../assets/img/queen.svg";
import ChessBg from "../../assets/img/chessbg.svg";

const Stack = () => {
	// PUZZLE INITIALIZATION
	const {newPuzzleCombination, solution} = slidePuzzleGenerator();
	const [currentOrder, setCurrentOrder] = useState(newPuzzleCombination());
	// IS PUZZLE SOLVED?
	const [isSlidePuzzleSolved, setIsSlidePuzzleSolved] = useState(false);

	// ADITTIONAL FUNCTIONS
	const {useScreenSize, fadeOutElement} = slidePuzzleAdditionals(setIsSlidePuzzleSolved);
	const [isTabletOrDesktop] = useScreenSize();

	// INTERACTIVE FUNCTIONS
	const mixPuzzleAgain = () => {
		setCurrentOrder(newPuzzleCombination());
		fadeOutElement(false);
	};

	useEffect(() => {
		console.log("reload in parent currentorderchanged ");
	}, [currentOrder]);

	if (isTabletOrDesktop && !isSlidePuzzleSolved) {
		return (
			<section className="technologiesSection">
				<header>
					<h2 className="technologiesSection__title">Technologies</h2>
				</header>
				<p className="technologiesSection__description">
					Your <b>stack</b> components <br />
					are the pieces in your <b>game</b>
				</p>
				<img src={ChessBg} alt="chessbg" className="technologiesSection__chessbg" />
				<SlidePuzzle setIsSlidePuzzleSolved={setIsSlidePuzzleSolved} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} solution={solution} />

				<div className="technologiesSection__interactionContainer">
					<PuzzleInteraction description="Automatic solve" handler={() => fadeOutElement(true)} image={Queen} keyWord="" />
				</div>

				<SecretWord secretLetter="" />
			</section>
		);
	} else {
		return (
			<section className="technologiesSection">
				<header>
					<h2 className="technologiesSection__title">Technologies</h2>
				</header>
				<div className="technologiesSection__techContainer">
					{technologies.map(({name, description, size}) => {
						return <TechCard key={name} techName={name} description={description} imgSize={size} />;
					})}
				</div>
				<div className="technologiesSection__techCircleContainer">
					{additionalTechnologies.map(({name}) => {
						return <TechCircle key={name} techName={name} />;
					})}
				</div>
				<div className="technologiesSection__interactionContainer">
					<PuzzleInteraction description="Try it again!" handler={mixPuzzleAgain} image={Thunder} keyWord="MIX" />
				</div>
				{/* ANIMATION OF SOLVED */}
				{isSlidePuzzleSolved && <AlertIndication found="t" message="Letter Found" bgcolor="#353841" />}
				<SecretWord secretLetter={isSlidePuzzleSolved ? "t" : ""} bgcolor="#353841" letterColor="white" animation={isSlidePuzzleSolved ? "animation" : ""} />
			</section>
		);
	}
};

export default Stack;
