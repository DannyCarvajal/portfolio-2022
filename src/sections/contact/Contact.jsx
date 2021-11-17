// COMPONENTS
import FormSubsection from "../../components/contact/form/FormSubsection";
import WordSubsection from "../../components/contact/word/WordSubsection";
import Footer from "../../components/contact/Footer";

// STYLES
import "./contact.scss";

const Contact = () => {
	return (
		<>
			<div className="contactSection">
				<div className="contactSection__container">
					<FormSubsection />
					<WordSubsection />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
