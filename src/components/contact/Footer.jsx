// COMPONENTS
import ContactLinks from "../global/ContactLinks";
import Sign from "../global/Sign";
// STYLES
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<Sign />
			<ContactLinks contacts={["linkedin", "github", "behance"]} />
		</footer>
	);
};

export default Footer;
