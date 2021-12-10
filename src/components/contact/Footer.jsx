// COMPONENTS
import ContactLinks from "components/global/ContactLinks";
import Sign from "components/global/Sign";
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
