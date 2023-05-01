import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Slides from "../../Components/Slides/Slide";
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
import { useLocation } from "react-router-dom";
>>>>>>> developer
import CardsHome from "../../Components/CardsHome/CardsHome";

function Home() {
	return (
		<>
			<NavBar />
			<Slides />
			<CardsHome />
			<Link to={"/farmastack/products"}>
				<button>Products</button>
			</Link>
			<Footer />
		</>
	);
}

export default Home;
