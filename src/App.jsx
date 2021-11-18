import {useState} from "react";
// COMPONENTS
import Intro from "./sections/introduction/Intro";
import Logic from "./sections/logic/LogicSection";
import Stack from "./sections/stack/Stack.jsx";
import Creative from "./sections/creative/Creative";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
// SECRET COMPONENT
import FinalPhrase from "./components/finalPhrase/FinalPhrase";
// STYLES
import "./app.scss";

function App() {
	// FALSE, PENDING, TRUE
	const [secretFound, setSecretFound] = useState(false);

	const Main = () => {
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
					<Stack />
					<Creative />
					<Projects />
				</>
			);
		}
	};
	return (
		<div className="App">
			<Main />
			<Contact secretFound={secretFound} setSecretFound={setSecretFound} />
		</div>
	);
}

export default App;
