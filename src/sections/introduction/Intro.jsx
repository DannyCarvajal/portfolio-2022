import "./intro.scss";
import PersonalData from "../../components/introduction/personalData.jsx";
import SecretWord from "../../components/global/secretword.jsx";

const Intro = () => {
	return (
		<div className="introSection">
			<img src="img/logo.png" alt="Danny Carvajal" className="introSection__logo" />
			<img src="img/olivercircle.png" alt="Danny carvajal" className="introSection__oliverimage" />
			<PersonalData
				message="Hello there!"
				name="Danny Carvajal"
				role="Front-end Developer"
				contact={[
					["linkedin", "https://www.linkedin.com/in/oliver-daniel-carvajal"],
					["github", "https://github.com/DannyCarvajal"],
					["email", "juan-daniel1914@hotmail.com"],
				]}
				className="introSection__personalData"
			/>
			<SecretWord secretLetter="S" bgcolor="white" letterColor="#353841" />
		</div>
	);
};

export default Intro;
