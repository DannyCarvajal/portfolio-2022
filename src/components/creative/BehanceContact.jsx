import "./behanceContact.scss";
//IMAGES
import Behance from "assets/img/behancecontact.png";
import BehanceArrow from "assets/img/behancearrow.png";

const CreativeContact = () => {
	return (
		<div className="behanceContact">
			<h2 className="behance__desc">Check out my behance</h2>
			<img src={BehanceArrow} alt="arrow" className="behance__arrow" />
			<a href="https://www.behance.net/dannycarvajal1" target="_blank" rel="noreferrer">
				<img src={Behance} alt="behance" className="behance__contactimg" />
			</a>
		</div>
	);
};

export default CreativeContact;
