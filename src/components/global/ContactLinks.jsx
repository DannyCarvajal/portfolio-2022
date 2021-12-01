// STYLES
import "./contactlinks.scss";
// CONSTANTS
import { CONTACT_TYPES } from "../../constants/contactTypes";
import { COLORS } from "../../constants/colors";
import { SIZES } from "../../constants/contactlinksizes";
// HELPERS
import { keyBasedOnHour } from "../../helpers/globalFunctions";

const ContactLinks = ({ contacts, color, size }) => {
	const iconColor = COLORS[color];
	const iconSize = SIZES[size];

	const iconStyles = {
		color: iconColor,
		fontSize: iconSize,
	};

	return (
		<div className="contactLinks">
			{contacts.map(contact => {
				let fontAwesomeIcon = CONTACT_TYPES[contact].icon;
				let anchorLink = CONTACT_TYPES[contact].link;

				return (
					<a
						href={anchorLink}
						key={contact + keyBasedOnHour()}
						target="_blank"
						rel="noreferrer"
						aria-label={contact}
					>
						<i className={fontAwesomeIcon} style={iconStyles}></i>
					</a>
				);
			})}
		</div>
	);
};

export default ContactLinks;
