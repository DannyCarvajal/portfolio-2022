import "./submitButton.scss";

const SubmitButton = () => {
	return (
		<button className="submitButton" type="submit">
			<div className="submitButton__message">
				<h2>Submit</h2>
				<i className="fas fa-paper-plane"></i>
			</div>
		</button>
	);
};

export default SubmitButton;
