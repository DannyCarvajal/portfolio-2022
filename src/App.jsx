import Intro from "./sections/introduction/Intro";
import Logic from "./sections/logic/LogicSection";
import Stack from "./sections/stack/Stack.jsx";
import Creative from "./sections/creative/Creative";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";

function App() {
	return (
		<div className="App">
			<Intro />
			<Logic />
			<Creative />
			<Stack />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
