import "./intro.scss";
import PersonalData from "../../components/introduction/personalData.jsx";
import SecretWord from "../../components/global/secretword.jsx";
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
					["linkedin", "https://www.linkedin.com/in/oliver-daniel-carvajal", Linkedin],
					["github", "https://github.com/DannyCarvajal", Github],
					["email", "juan-daniel1914@hotmail.com", Email],
				]}
				className="introSection__personalData"
			/>
			<SecretWord secretLetter="r" bgcolor="white" letterColor="#353841" />
		</section>
	);
};

export default Intro;
