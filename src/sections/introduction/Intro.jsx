// COMPONENTS
import PersonalData from "../../components/introduction/PersonalData.jsx";
import MainLogo from "../../components/global/MainLogo.jsx";
// STYLES
import "./intro.scss";
// IMAGES
import Danny from "../../assets/img/olivercircle.png";
import Linkedin from "../../assets/img/linkedincontact.svg";
import Github from "../../assets/img/githubcontact.svg";
import Email from "../../assets/img/emailcontact.svg";

const Intro = () => {
	const Message = () => {
		return (
			<>
				Hello there! <br />
				I'm <b>Danny Carvajal</b>
			</>
		);
	};

	return (
		<section className="introSection">
			<MainLogo />
			<img src={Danny} alt="Danny carvajal" className="introSection__oliverimage" />
			<PersonalData
				message={<Message />}
				role="Front-End Developer"
				contact={[
					["linkedin", "https://www.linkedin.com/in/dannycarvajal1", Linkedin],
					["github", "https://github.com/dannycarvajal", Github],
					["email", "oliverdanielcarvajal@hotmail.com", Email],
				]}
				className="introSection__personalData"
			/>
		</section>
	);
};

export default Intro;
