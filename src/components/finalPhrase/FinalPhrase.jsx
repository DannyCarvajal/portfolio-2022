// COMPONENTS
import MainLogo from "../global/MainLogo";

// STYLES
import "./finalphrase.scss";
// IMAGES
import DannyDesktop from "../../assets/img/dannydesktop.png";
import DannyMobile from "../../assets/img/dannymobile.png";
const FinalPhrase = () => {
	return (
		<section className="finalPhrase">
			<MainLogo />
			<picture>
				<source media="(min-width:700px)" srcset={DannyDesktop} />
				<source media="(min-width:200px)" srcset={DannyMobile} />
				<img src={DannyDesktop} alt="Danny carvajal" />
			</picture>
			<blockquote>
				<p>“If you are having fun you’re probably in the right way”</p>
				<cite>Danny Carvajal</cite>
			</blockquote>
		</section>
	);
};

export default FinalPhrase;
