import "./intro.scss";
import PersonalData from "../../components/introduction/personalData.jsx";

const Intro = () => {
	return (
		<div className="introSection">
			<PersonalData
				message="Hello there!"
				name="I'm Danny Carvajal"
				role="Frontend Developer"
				contact={[
					["linkedin", "https://www.linkedin.com/in/oliver-daniel-carvajal"],
					["github", "https://github.com/DannyCarvajal"],
					["email", "juan-daniel1914@hotmail.com"],
				]}
			/>
		</div>
	);
};

export default Intro;
