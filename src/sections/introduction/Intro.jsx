// COMPONENTS
import PersonalData from "../../components/introduction/PersonalData.jsx";
import MainLogo from "../../components/global/MainLogo.jsx";
// STYLES
import "./intro.scss";
// IMAGES
import Danny from "../../assets/img/olivercircle.png";

const Intro = () => {
	const Message = () => (
		<>
			Hello there!
			<br />
			I'm <b>Danny Carvajal</b>
		</>
	);

	return (
		<section className="introSection">
			<MainLogo />
			<img src={Danny} alt="Danny carvajal" className="introSection__oliverimage" />
			<PersonalData role="Front-End Developer" message={<Message />} />
		</section>
	);
};

export default Intro;
