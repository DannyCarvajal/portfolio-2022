import "./clickIndication.scss";

const ClickIndication = ({message, containerClass}) => {
	return (
		<div className={`clickIndication ${containerClass}`}>
			<p className="clickIndication__msg">{message}</p>
			<img src="img/handindicator.png" alt="hand" className="clickIndication__hand" />
		</div>
	);
};

export default ClickIndication;
