// COMPONENTS
import MainLogo from "../global/MainLogo";
import ContactLinks from "../global/ContactLinks";
// STYLES
import "./finalphrase.scss";
// IMAGES
import DannyDesktop from "../../assets/img/dannydesktop.webp";
import DannyMobile from "../../assets/img/dannymobile.webp";
const FinalPhrase = () => {
	return (
		<section className="finalPhrase">
			<MainLogo />
			<picture>
				<source media="(min-width:720px)" srcSet={DannyDesktop} />
				<source media="(min-width:200px)" srcSet={DannyMobile} />
				<img src={DannyDesktop} alt="Danny carvajal" />
			</picture>
			<blockquote>
				<p className="phrase">
					“If you are having fun you’re <br /> probably in the <span className="wordFound">right</span> way”
				</p>
				<cite className="name">Danny Carvajal</cite>
				<ContactLinks
					contact={[
						{
							item: "linkedin",
							link: "https://www.linkedin.com/in/dannycarvajal1",
						},
						{
							item: "github",
							link: "https://github.com/dannycarvajal",
						},
						{
							item: "envelope",
							link: "oliverdanielcarvajal@hotmail.com",
						},
					]}
				/>
			</blockquote>
		</section>
	);
};

export default FinalPhrase;
