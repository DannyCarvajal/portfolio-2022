import "./alertIndication.scss";

const AlertIndication = ({found, message, bgStyles}) => {
	return (
		<div className="alertIndication" style={bgStyles}>
			<div className="alertIndication__letterFound">{found}</div>
			<p className="alertIndication__message">{message}</p>
		</div>
	);
};

export default AlertIndication;
