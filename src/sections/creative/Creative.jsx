import Piano from "../../components/creative/piano";
import "./creative.scss";

const Creative = () => {
	return (
		<div className="creativeSection">
			<div className="creativeSection__descContainer">
				<p className="descContainer__desc">
					For sure, most problems that come to be can be solved in various ways, but is not until <b>design</b> comes in, that the inner magic comes out
				</p>
			</div>
			<div className="creativeSection__behance">
				<h2 className="behance__desc">Check out my behance</h2>
				<img src="img/behancearrow.png" alt="arrow" className="behance__arrow" />
				<a href="https://www.behance.net/oliver-daniel" target="_blank" rel="noreferrer">
					<img src="img/behancecontact.png" alt="behance" className="behance__contactimg" />
				</a>
			</div>
			<Piano />
		</div>
	);
};

export default Creative;
