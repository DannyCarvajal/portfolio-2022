// LOGIC
import { technologies, additionalTechnologies } from "constants/listOfTechnologies.js";
// COMPONENTS
import TechCard from "components/stack/TechCard";
import TechCircle from "components/stack/TechCircleCard";
import SecretWord from "components/global/SecretWord";
import PuzzleInteraction from "components/stack/PuzzleInteraction";
import CheckSecretWord from "components/global/CheckSecretWord";
// STYLES
import "./stack.scss";
// IMAGES
import Thunder from "assets/img/thunder.svg";
// CONSTANTS
import { COLORS } from "constants/colors";

const MobileStack = ({ mixPuzzleAgain, isSlidePuzzleSolved, isTabletOrDesktop }) => {
	return (
		<>
			<header>
				<h2 className="technologiesSection__title">Technologies</h2>
			</header>
			<div className="technologiesSection__techContainer">
				{technologies.map(({ name, description, size }) => {
					return <TechCard key={name} techName={name} description={description} imgSize={size} />;
				})}
			</div>
			<div className="technologiesSection__techCircleContainer">
				{additionalTechnologies.map(({ name }) => {
					return <TechCircle key={name} techName={name} />;
				})}
			</div>
			<div className="technologiesSection__interactionContainer solved">
				<PuzzleInteraction
					description="Try it again!"
					handler={mixPuzzleAgain}
					image={Thunder}
					keyWord="MIX"
				/>
			</div>
			<CheckSecretWord
				solved={isSlidePuzzleSolved}
				letter="ht"
				letterColor="white"
				bgColor="SMOOTH_BLACK"
			/>
			<SecretWord
				secretLetter={!isTabletOrDesktop && "ht"}
				bgcolor={COLORS["SMOOTH_BLACK"]}
				letterColor="white"
				animation={""}
			/>
		</>
	);
};

export default MobileStack;
