import { useEffect, useState } from "react";
import "./clickIndication.scss";
// IMAGES
import HandIndicator from "assets/img/handindicator.png";

const ClickIndication = ({ message, containerClass, elemntsToFade }) => {
	const [show, setshow] = useState("");
	const fadeOut = () => {
		// TODO => LET REACT HANDLE THE FADE OUT
		let elements = document.querySelectorAll(`${elemntsToFade}`);
		elements.forEach(el =>
			el.addEventListener("mousedown", () => {
				setshow("fadeOut");
			})
		);
	};

	useEffect(() => {
		fadeOut();
	}, []);

	return (
		<div className={`clickIndication ${containerClass} ${show}`}>
			<p className="clickIndication__msg">{message}</p>
			<img src={HandIndicator} alt="hand" className="clickIndication__hand" />
		</div>
	);
};

export default ClickIndication;
