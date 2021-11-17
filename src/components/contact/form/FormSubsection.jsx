import React, {useState} from "react";
// COMPONENTS
import NamesCharacter from "./NamesCharacter";
import SubmitButton from "./SubmitButton";
// STYLES
import "./formSubsection.scss";

const FormSubsection = () => {
	// form conformed by a name, email and textarea
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className="formSubsection">
			<h2 className="formSubsection__title">Let’s talk...</h2>

			<form action="#" className="form">
				<div className="form__topSection">
					<NamesCharacter />
					<div className="topSection__inputs">
						<div className="inputContainer">
							<label htmlFor="name">Name</label>
							<i className="fas fa-user"></i>
							<input type="text" name="name" id="name" className="form__name" value={name} onChange={e => setName(e.target.value)} />
						</div>

						<div className="inputContainer">
							<label htmlFor="mail">Email</label>
							<i className="fas fa-envelope"></i>
							<input type="email" name="mail" id="mail" className="form__mail" value={email} onChange={e => setEmail(e.target.value)} />
						</div>
					</div>
				</div>
				<div className="form__bottomSection">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="50" rows="10" value={message} onChange={e => setMessage(e.target.value)}></textarea>
				</div>
				<SubmitButton />
			</form>
		</div>
	);
};

export default FormSubsection;
