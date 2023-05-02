import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Slides from "../../Components/Slides/Slides";
import CardsHome from "../../Components/CardsHome/CardsHome";

function Home() {
	return (
		<>
			<NavBar />
			<Slides />
			
			<CardsHome />
			
			<Footer />
		</>
	);
}

export default Home;
