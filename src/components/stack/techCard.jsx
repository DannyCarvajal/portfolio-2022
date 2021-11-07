import "./techCard.scss";

const tech = ({techName, description, imgSize}) => {
	const Image = () => {
		if (imgSize === "normal") {
			return (
				<>
					<h3 className="tech__name">{techName.toUpperCase()}</h3>
					<img className="tech__icon" src={process.env.PUBLIC_URL + `/img/${techName}.svg`} alt={techName} width="60px" />
				</>
			);
		} else {
			return <img className="tech__icon" src={process.env.PUBLIC_URL + `/img/${techName}.svg`} alt={techName} width="70px" />;
		}
	};
	return (
		<div className="techContainer__tech">
			<div className="tech__iconContainer">
				<Image />
			</div>
			<p className="tech__description">{description}</p>
		</div>
	);
};

export default tech;
