import {useRef, useState} from "react";
// LOGIC
import sendEmail from "./formLogic";
// COMPONENTS
import NamesCharacter from "./NamesCharacter";
import SubmitButton from "./SubmitButton";
import Message from "../../global/Message";
// STYLES
import "./formSubsection.scss";

const FormSubsection = () => {
	const form = useRef();
	// STATUS : "", SENDING, SENTSUCESS, SENTERROR, ALREADYSENT
	const [statusEmail, setStatusEmail] = useState("");
	const [firstName, setFirstName] = useState("");

	const handleFirstName = name => {
		if (name.includes(" ")) setFirstName(name.split(" ")[0].toLowerCase());
	};

	return (
		<div className="formSubsection">
			<h2 className="formSubsection__title">Let’s talk...</h2>
			<NamesCharacter name={firstName} />
			<form action="#" className="form" onSubmit={e => sendEmail(e, form, setStatusEmail)} ref={form}>
				<div className="inputContainer">
					<label htmlFor="name">Name</label>
					<i className="fas fa-user"></i>
					<input type="text" name="name" id="name" className="form__name" autoComplete="off" required onChange={e => handleFirstName(e.target.value)} />
				</div>

				<div className="inputContainer">
					<label htmlFor="mail">Email</label>
					<i className="fas fa-envelope"></i>
					<input type="email" name="mail" id="mail" className="form__mail" required />
				</div>
				<div className="messageContainer">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="50" rows="10" required></textarea>
				</div>
				<SubmitButton />
				{statusEmail === "SENDING" && <Message bgColor="#70C6E6" message="Sending..." />}
				{statusEmail === "ALREADYSENT" && <Message bgColor="#e6de70" message="You already sent an email. Please send it from your mail app" />}
				{statusEmail === "SENTSUCCESS" && <Message bgColor="#4DD5C0" message="Email succesfully sent!" />}
				{statusEmail === "SENTERROR" && <Message bgColor="#F44336" message="Couldn't send email! Please send it from your mail app" />}
			</form>
		</div>
	);
};

export default FormSubsection;
