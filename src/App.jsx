/* THE WHOLE CONCEPT OF THE PORTFOLIO IS BASED ON FINDING A SECRET WORD, THAT WILL SHOW A SPECIAL PHRASE AT THE END OF THE WEBFLOW */

import {useState} from "react";
// COMPONENTS
import Intro from "./sections/introduction/Intro";
/* INTRODUCTION WITH NAME AND MAIN CONTACT DATA */
import Logic from "./sections/logic/LogicSection";
/* FIRST PUZZLE OF THE PAGE, SHOWING MY "LOGIC" SIDE WITH THE RUBIKS CUBE PUZZLE*/
import Creative from "./sections/creative/Creative";
/* SECOND PUZZLE OF PIANO THAT REPRESENTS MY INTEREST FOR UI AND CREATIVITY */
import Stack from "./sections/stack/Stack.jsx";
/* SLIDE PUZZLE OF MY TECH SKILLS */
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
// SECRET COMPONENT THAT WILL APPEAR WHEN THE USER FIND THE SECRET WORD
import FinalPhrase from "./components/finalPhrase/FinalPhrase";
// STYLES
import "./app.scss";

function App() {
	// FALSE, PENDING, TRUE
	const [secretFound, setSecretFound] = useState(false);

	const MainContent = () => {
		if (secretFound === true) {
			return (
				<div className="AppSecret">
					<FinalPhrase />
				</div>
			);
		} else {
			return (
				<>
					<Intro />
					<Logic />
					<Creative />
					<Stack />
					<Projects />
				</>
			);
		}
	};
	return (
		<div className="App">
			<MainContent />
			<Contact secretFound={secretFound} setSecretFound={setSecretFound} />
		</div>
	);
}

export default App;
