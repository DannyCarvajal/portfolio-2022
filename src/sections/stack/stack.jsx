import {useState} from "react";
import Tech from "../../components/stack/techCard.jsx";
import Minitech from "../../components/stack/techCircleCard.jsx";
import SecretWord from "../../components/global/secretword.jsx";
import "./stack.scss";

const stack = () => {
	const [slidePuzzleSolved, setslidePuzzleSolved] = useState(false);

	const technologies = [
		{
			name: "html",
			description: `The building block, 
			the first thing that you 
			learnt about web 
			development`,
			size: "normal",
		},
		{
			name: "css",
			description: `Need some makeup
			and some cool animations? 
			yes sir...`,
			size: "normal",
		},
		{
			name: "javascript",
			description: `The cousin of Java and
			the minor genius brother of
			TypeScript`,
			size: "medium",
		},
		{
			name: "sass",
			description: `Css’s mother. Keeping 
			things clean and 
			organized. She knows
			you'll say thanks in the
			future`,
			size: "medium",
		},
		{
			name: "git",
			description: `The reason why you
			looked silly when you
			first upload your code
			to google drive`,
			size: "normal",
		},
		{
			name: "react",
			description: `Everything before packaged and tied up, with some instant magic inside`,
			size: "normal",
		},
	];

	const additionalTechnologies = [
		{
			name: "figma",
		},
		{
			name: "concept design",
		},
		{
			name: "rdb",
		},
	];

	return (
		<section className="technologiesSection">
			<header>
				<h2 className="technologiesSection__title">Technologies</h2>
			</header>
			<div className="technologiesSection__techContainer">
				{technologies.map(({name, description, size}) => {
					return <Tech key={name} techName={name} description={description} imgSize={size} />;
				})}
			</div>
			<div className="technologiesSection__minitechContainer">
				{additionalTechnologies.map(({name}) => {
					return <Minitech key={name} techName={name} />;
				})}
			</div>
			<SecretWord secretLetter="t" />
		</section>
	);
};

export default stack;
