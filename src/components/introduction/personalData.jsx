import "./personalData.scss";

const personalData = ({message, name, role, contact}) => {
	return (
		<div className="personalData">
			<p className="personalData__message">
				{message} <br />
				I'm <b>{name}</b>
			</p>
			<div className="personalData__role">
				<h3>{role}</h3>
			</div>
			<div className="personalData__contact">
				{contact.map(([item, link]) => (
					<a href={item === "email" ? `mailto:${link}` : link} key={item} target="_blank" rel="noreferrer">
						<img src={`img/${item}contact.svg`} alt={item} className="contactIcon" />
					</a>
				))}
			</div>
		</div>
	);
};

export default personalData;
