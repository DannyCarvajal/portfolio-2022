import "./clickIndication.scss";
// IMAGES
import HandIndicator from "../../assets/img/handindicator.png";

const ClickIndication = ({message, containerClass}) => {
	return (
		<div className={`clickIndication ${containerClass}`}>
			<p className="clickIndication__msg">{message}</p>
			<img src={HandIndicator} alt="hand" className="clickIndication__hand" />
		</div>
	);
};

export default ClickIndication;
