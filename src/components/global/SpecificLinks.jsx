// STYLES
import "./contactlinks.scss";
// CONSTANTS
import {CONTACT_TYPES} from "../../constants/contactTypes";
import {COLORS} from "../../constants/colors";
import {SIZES} from "../../constants/contactlinksizes";
// HELPERS
import {keyBasedOnHour} from "../../helpers/helpers";

const ContactLinks = ({contacts, size}) => {
	const iconSize = SIZES[size];

	const iconStyles = {
		fontSize: iconSize,
		background: COLORS.SPACE,
		WebkitBackgroundClip: "text",
		backgroundClip: "text",
		color: "transparent",
	};

	return (
		<div className="contactLinks">
			{contacts.map(([icon, link]) => {
				let fontAwesomeIcon = CONTACT_TYPES[icon].icon;

				return (
					<a href={link} key={link + keyBasedOnHour()} target="_blank" rel="noreferrer" aria-label={link}>
						<i className={fontAwesomeIcon} style={iconStyles}></i>
					</a>
				);
			})}
		</div>
	);
};

export default ContactLinks;
