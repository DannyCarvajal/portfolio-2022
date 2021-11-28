// COMPONENTS
import ContactLinks from "../global/ContactLinks";
import Sign from "../global/Sign";
// STYLES
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<Sign />
			<ContactLinks contacts={["linkedin", "github", "behance"]} color="DARK_BLUE" size="small" />
		</footer>
	);
};

export default Footer;
