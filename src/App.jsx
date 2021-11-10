import Intro from "./sections/introduction/Intro";
import Logic from "./sections/logic/LogicSection";
import Stack from "./sections/stack/stack.jsx";
import Creative from "./sections/creative/Creative";
import Projects from "./sections/projects/Projects";

function App() {
	return (
		<div className="App">
			<Intro />
			<Logic />
			<Creative />
			<Stack />
			<Projects />
		</div>
	);
}

export default App;
