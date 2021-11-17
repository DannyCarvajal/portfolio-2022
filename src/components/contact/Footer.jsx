// COMPONENTS
import ContactLinks from "../global/ContactLinks";
import Sign from "../global/Sign";
// STYLES
import "./footer.scss";
// IMAGES
import BehanceFooter from "../../assets/img/behancefooter.png";
import GithubFooter from "../../assets/img/githubfooter.png";
import LinkedInFooter from "../../assets/img/linkedinfooter.png";

const Footer = () => {
	return (
		<footer>
			<Sign />
			<ContactLinks
				contact={[
					{
						item: "Linkedin",
						link: "https://www.linkedin.com/in/dannycarvajal1",
						image: LinkedInFooter,
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
