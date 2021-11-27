// STYLES
import "./contactlinks.scss";
// CONSTANTS
import contactTypes from "../../helpers/contactTypes";

const ContactLinks = ({contact}) => {
	const keyBasedOnHour = () => new Date().getTime();
	const prefixFontAwesome = item => (item === "envelope" ? "fas" : "fab");

	return (
		<div className="contactLinks">
			{contact.map(({item, link}) => {
				let loweredItem = item.toLowerCase();

				return (
					<a href={item === "envelope" ? `mailto:${link}` : link} key={item + keyBasedOnHour()} target="_blank" rel="noreferrer" aria-label={item}>
						<i className={`${prefixFontAwesome(loweredItem)} fa-${loweredItem}`}></i>
					</a>
				);
			})}
		</div>
	);
};

export default ContactLinks;
