// STYLES
import "./message.scss";

const Message = ({bgColor, message}) => {
	let animation = message === "Sending..." ? "fadeInFromBottom 3s ease-in-out forwards" : "fadeInFromBottomAndDissapear 7s ease-in-out forwards";

	const messageStyles = {
		backgroundColor: bgColor,
		animation,
	};

	return (
		<div className="message" style={messageStyles}>
			{" "}
			<h2> {message}</h2>{" "}
		</div>
	);
};

export default Message;
