// COMPONENTS
import PersonalData from "../../components/introduction/personalData.jsx";
import SecretWord from "../../components/global/secretword.jsx";
// STYLES
import "./intro.scss";
// IMAGES
import Logo from "../../assets/img/logo.png";
import Danny from "../../assets/img/olivercircle.png";
import Linkedin from "../../assets/img/linkedincontact.svg";
import Github from "../../assets/img/githubcontact.svg";
import Email from "../../assets/img/emailcontact.svg";

const Intro = () => {
	return (
		<section className="introSection">
			<img src={Logo} alt="Danny Carvajal" className="introSection__logo" />
			<img src={Danny} alt="Danny carvajal" className="introSection__oliverimage" />
			<PersonalData
				message="Hello there!"
				name="Danny Carvajal"
				role="Front-end Developer"
				contact={[
					["linkedin", "https://www.linkedin.com/in/dannycarvajal1", Linkedin],
					["github", "https://github.com/dannycarvajal", Github],
					["email", "oliverdanielcarvajal@hotmail.com", Email],
				]}
				className="introSection__personalData"
			/>
			<SecretWord secretLetter="r" bgcolor="white" letterColor="#353841" />
		</section>
	);
};

export default Intro;
