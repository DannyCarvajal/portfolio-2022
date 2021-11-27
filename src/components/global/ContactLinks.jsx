// STYLES
import "./contactlinks.scss";
// CONSTANTS
import {contactTypes} from "../../helpers/contactTypes";

const ContactLinks = ({contacts}) => {
	const keyBasedOnHour = () => new Date().getTime();
	const prefixFontAwesome = item => (item === "envelope" ? "fas" : "fab");

	return (
		<div className="contactLinks">
			{contacts.map(contact => {
				let fontAwesomeIcon = contactTypes[contact].icon;
				let anchorLink = contactTypes[contact].link;
				let prefix = prefixFontAwesome(fontAwesomeIcon);

				return (
					<a href={anchorLink} key={contact + keyBasedOnHour()} target="_blank" rel="noreferrer" aria-label={contact}>
						<i className={`${prefix} fa-${fontAwesomeIcon}`}></i>
					</a>
				);
			})}
		</div>
	);
};

export default ContactLinks;
