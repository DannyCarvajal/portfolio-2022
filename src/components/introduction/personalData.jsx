// STYLES
import "./personalData.scss";
// COMPONENTS
import ContactLinks from "components/global/ContactLinks";
import Role from "./Role";

const PersonalData = ({ role, message }) => {
	return (
		<div className="personalData">
			<p className="personalData__message" dangerouslySetInnerHTML={{ __html: message }}></p>
			<Role role={role} />
			<div className="personalData__contact">
				<ContactLinks contacts={["linkedin", "github", "email"]} color="WHITE" size="medium" />
			</div>
		</div>
	);
};

export default PersonalData;
