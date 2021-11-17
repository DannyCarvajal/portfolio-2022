import "./contactlinks.scss";

const ContactLinks = ({contact}) => {
	// GENERATE A NUMBER BASED ON THE HOUR OF THE DAY
	const newKey = () => new Date().getTime();

	return (
		<div className="contactLinks">
			{contact.map(({item, link}) => (
				<a href={item === "email" ? `mailto:${link}` : link} key={item + newKey()} target="_blank" rel="noreferrer">
					<i className={`fab fa-${item.toLowerCase()}`}></i>
				</a>
			))}
		</div>
	);
};

export default ContactLinks;
