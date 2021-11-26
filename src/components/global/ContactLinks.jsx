import "./contactlinks.scss";

const ContactLinks = ({contact}) => {
	// GENERATE A NUMBER BASED ON THE HOUR OF THE DAY
	const newKey = () => new Date().getTime();
	const initialWordIcon = item => (item === "envelope" ? "fas" : "fab");

	return (
		<div className="contactLinks">
			{contact.map(({item, link}) => {
				let loweredItem = item.toLowerCase();

				return (
					<a href={item === "envelope" ? `mailto:${link}` : link} key={item + newKey()} target="_blank" rel="noreferrer" aria-label={item}>
						<i className={`${initialWordIcon(loweredItem)} fa-${loweredItem}`}></i>
					</a>
				);
			})}
		</div>
	);
};

export default ContactLinks;
