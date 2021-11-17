// COMPONENTS
import FormSubsection from "../../components/contact/form/FormSubsection";
import WordSubsection from "../../components/contact/word/WordSubsection";

// STYLES
import "./contact.scss";

const Contact = () => {
	return (
		<div className="contactSection">
			<div className="contactSection__container">
				<FormSubsection />
				<WordSubsection />
			</div>
		</div>
	);
};

export default Contact;
