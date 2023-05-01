import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Slides from "../../Components/Slides/Slide";
import SlideBottom from "../../Components/Slides/SlideBottom";
import Cards from "../Details/Details";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Products from "../Products/Products";
import CardsHome from "../../Components/CardsHome/CardsHome";

function Home() {
	const location = useLocation();
	return (
		<>
			<NavBar />
			<Slides />
<<<<<<< HEAD
			<Cards />
			<SlideBottom />
=======
			<CardsHome />
>>>>>>> developer
			<Link to={"/farmastack/products"}>
				<button>Products</button>
			</Link>
			<Footer />
		</>
	);
}

export default Home;
