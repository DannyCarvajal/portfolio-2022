import emailjs from "emailjs-com";

const sendEmail = (e, form, setStatusEmail) => {
	e.preventDefault();
	setStatusEmail("SENDING");

	if (localStorage.getItem("alreadysent") === "true" || localStorage.getItem("alreadysent") === true || localStorage.getItem("ptbr") === "true") {
		setStatusEmail("ALREADYSENT");
		setTimeout(() => {
			setStatusEmail("");
		}, 7000);
		return false;
	}

	emailjs
		.sendForm(process.env.REACT_APP_EMAILID, process.env.REACT_APP_TEMPLATEID, form.current, process.env.REACT_APP_USERID)
		.then(
			result => {
				console.log(result.text);
				console.log(result);
				setStatusEmail("SENTSUCCESS");
				localStorage.setItem("alreadysent", "true");
				localStorage.setItem("ptbr", "true");
				sessionStorage.setItem("alreadysent", "true");
			},
			error => {
				console.log(error.text);
				setStatusEmail("SENTERROR");
			}
		)
		.catch(err => {
			setStatusEmail("SENTERROR");
		})
		.finally(() => {
			setTimeout(() => {
				setStatusEmail("");
			}, 7000);
		});
	// RESET FORM
	form.current.reset();
};

export default sendEmail;
