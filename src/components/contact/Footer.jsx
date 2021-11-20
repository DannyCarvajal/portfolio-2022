// COMPONENTS
import ContactLinks from "../global/ContactLinks";
import Sign from "../global/Sign";
// STYLES
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<Sign />
			<ContactLinks
				contact={[
					{
						item: "Linkedin",
						link: "https://www.linkedin.com/in/dannycarvajal1",
					},
					{
						item: "Github",
						link: "https://github.com/dannycarvajal",
					},
					{
						item: "Behance-Square",
						link: "https://www.behance.net/dannycarvajal1",
					},
				]}
			/>
		</footer>
	);
};

export default Footer;
