import "./alertIndication.scss";

const AlertIndication = ({found, message, bgcolor}) => {
	return (
		<div className="alertIndication" style={{background: bgcolor}}>
			<div className="alertIndication__letterFound">{found}</div>
			<p className="alertIndication__message">{message}</p>
		</div>
	);
};

export default AlertIndication;
