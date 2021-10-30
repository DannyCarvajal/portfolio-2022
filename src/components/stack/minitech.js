import "./minitech.scss";

const minitech = ({techName}) => {
	return (
		<div className="techContainer__minitech">
			<div className="minitech__imgContainer">
				<img src={`img/${techName.replace(/\s/g, "")}.svg`} alt={techName} width={"25" + (techName === "concept design" ? "20" : "") + "px"} />
			</div>
			<h3 className="minitech__title">{techName.toUpperCase()}</h3>
		</div>
	);
};

export default minitech;
