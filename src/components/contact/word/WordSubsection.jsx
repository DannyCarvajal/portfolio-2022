import {useState, useEffect} from "react";
// STYLES
import "./wordSubsection.scss";
// IMAGES
import FinalLogo from "../../../assets/img/finallogo.png";

const WordSubsection = ({secretFound, setSecretFound}) => {
	const [guessSecret, setGuessSecret] = useState("");

	useEffect(() => {
		if (guessSecret === "right") setSecretFound("PENDING");
		console.log(guessSecret);
	}, [guessSecret]);

	const gradient = secretFound === true ? " linear-gradient(179.4deg, rgba(247, 249, 251, 0.8) 3.83%, rgba(255, 255, 255, 0) 98.27%)" : "linear-gradient(180.26deg, #00161E 36.68%, rgba(79, 124, 140, 0.46) 98.53%)";

	const finalArrowHandler = () => {
		setSecretFound(true);
		window.scrollTo(0, 0);
	};

	const goBackHandler = () => {
		window.scrollTo(0, 0);
		setSecretFound("PENDING");
		setGuessSecret("");
	};

	const InnerWordSection = () => {
		if (!secretFound) {
			return (
				<div className="wordSubsection__guessContainer">
					<input type="text" className="wordSubsection__word" maxLength="5" value={guessSecret} onChange={e => setGuessSecret(e.target.value.toLowerCase())} autoFocus={guessSecret.length > 0} />
					<h2 className="indication">Write the secret word</h2>
				</div>
			);
		} else if (secretFound === "PENDING") {
			return (
				<>
					<div className="arrowContainer" onClick={finalArrowHandler}>
						<i className="fas fa-arrow-up"></i>
						<h2 className="pressme">Press me!</h2>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className="arrowContainer" onClick={goBackHandler}>
						<i className="fas fa-arrow-down"></i>
						<h2 className="pressme">Go back?</h2>
					</div>
				</>
			);
		}
	};

	return (
		<div className="wordSubsection" style={{background: gradient}}>
			<div className="wordSubsection__gradientBg"></div>
			<InnerWordSection />
		</div>
	);
};

export default WordSubsection;
