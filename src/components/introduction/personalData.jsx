import "./personalData.scss";

const PersonalData = ({message, name, role, contact}) => {
	return (
		<div className="personalData">
			<p className="personalData__message">{message}</p>
			<div className="personalData__role">
				<h3>{role}</h3>
			</div>
			<div className="personalData__contact">
				{contact.map(([item, link, image]) => (
					<a href={item === "email" ? `mailto:${link}` : link} key={item} target="_blank" rel="noreferrer">
						<img src={image} alt={item} className={`contact${item}`} />
					</a>
				))}
			</div>
		</div>
	);
};

export default PersonalData;
