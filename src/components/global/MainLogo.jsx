// STYLES
import "./mainlogo.scss";
// IMAGES
import Logo from "../../assets/img/finallogo.png";

const MainLogo = () => {
	return (
		<>
			<img src={Logo} alt="Danny Carvajal" className="mainlogo" />
		</>
	);
};

export default MainLogo;
