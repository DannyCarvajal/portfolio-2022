import ProjectItem from "../../components/projects/ProjectItem";
import SecretWord from "../../components/global/secretword";
import "./projects.scss";

// IMAGES
import Relyer from "../../assets/img/relyer.png";
import Gifos from "../../assets/img/gifos.png";
import PodcastChannel from "../../assets/img/podcastchannel.png";
import Brushedbg from "../../assets/img/brushedbg.jpg";

const Projects = () => {
	return (
		<div className="projectsSection">
			<img src={Brushedbg} alt="bgbrushed" className="projectsSection__brushedbg" />
			<h2 className="projectsSection__title">Projects</h2>
			<div className="projectItemContainer">
				<ProjectItem image={Gifos} name={"Gifos"} links={["https://github.com/DannyCarvajal/gifos", "https://dannycarvajal.github.io/gifos/"]} description={"Platform to explore, create and download gifs. You can store your favorite gifs, see trending topics and gifs, and turn the dark mode on. Powered by Giphy's API and webRTC library"} />

				<ProjectItem
					image={Relyer}
					name={"Relyer"}
					links={["https://github.com/DannyCarvajal/relyer", "https://dannycarvajal.github.io/relyer/", "https://www.behance.net/gallery/129632115/RELYER"]}
					description={"Platform that helps MSMEs identify their tech needs, connecting with suppliers and experts that will boost their companies. A diagnostic test is done and then we suggest specialists and tools according to the needs."}
				/>

				<ProjectItem image={PodcastChannel} name={"Podcast Channel"} links={["https://github.com/DannyCarvajal/podcastchannel", "https://www.behance.net/gallery/129632115/RELYER"]} description={"Podcast channel is a platform that allows you to listen different technologie podcasts by using embeded podcasts from Spotify, enjoy listening...."} />
			</div>
			<SecretWord secretLetter="t" bgcolor="white" letterColor="#353841" />
		</div>
	);
};

export default Projects;
