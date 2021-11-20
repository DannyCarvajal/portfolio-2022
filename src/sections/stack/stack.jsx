import {useState} from "react";
// LOGIC
import {technologies, additionalTechnologies} from "./listOfTechnologies.js";
import slidePuzzleGenerator from "../../hooks/slidePuzzleGenerator.js";
import useSlidePuzzleAdditionals, {useScreenSize} from "../../hooks/helpers";
// COMPONENTS
import SlidePuzzle from "../../components/stack/SlidePuzzle";
import TechCard from "../../components/stack/TechCard";
import TechCircle from "../../components/stack/TechCircleCard";
import SecretWord from "../../components/global/Secretword";
import PuzzleInteraction from "../../components/stack/PuzzleInteraction";
import AlertIndication from "../../components/global/AlertIndication";
// STYLES
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
	const {activeAnimation, startAnimation} = useSlidePuzzleAdditionals(setIsSlidePuzzleSolved);
	const [isTabletOrDesktop] = useScreenSize();

	// INTERACTIVE FUNCTIONS
	const mixPuzzleAgain = () => {
		startAnimation(false);
		setCurrentOrder(newPuzzleCombination());
	};

	if (isTabletOrDesktop && !isSlidePuzzleSolved) {
		return (
			<section className={"technologiesSection " + (activeAnimation ? "activeAnimation" : "")}>
				<header>
					<h2 className="technologiesSection__title">Technologies</h2>
				</header>
				<p className="technologiesSection__description">
					Your technologies <b>stack</b>
					<br />
					are the pieces in your <b>game</b>
				</p>
				<img src={ChessBg} alt="chessbg" className="technologiesSection__chessbg" />
				<SlidePuzzle setIsSlidePuzzleSolved={setIsSlidePuzzleSolved} currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} solution={solution} solvedHandler={() => startAnimation(true)} />

				<div className="technologiesSection__interactionContainer">
					<PuzzleInteraction description="Automatic solve" handler={() => startAnimation(true)} image={Queen} keyWord="" />
				</div>

				<SecretWord secretLetter="" />
			</section>
		);
	} else {
		return (
			<section className={"technologiesSection solved " + (activeAnimation ? "activeAnimation" : "")}>
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
				<div className="technologiesSection__interactionContainer solved">
					<PuzzleInteraction description="Try it again!" handler={mixPuzzleAgain} image={Thunder} keyWord="MIX" />
				</div>
				{/* ANIMATION OF SOLVED */}
				{isSlidePuzzleSolved && <AlertIndication found="gh" message="Two letters found" bgcolor="#353841" />}
				<SecretWord secretLetter="gh" bgcolor="#353841" letterColor="white" animation={isSlidePuzzleSolved ? "animation" : ""} />
			</section>
		);
	}
};

export default Stack;
