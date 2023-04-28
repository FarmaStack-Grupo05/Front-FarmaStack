import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Slides from "../../Components/Slides/Slide";
import SlideBottom from "../../Components/Slides/SlideBottom";
import Details from "../Details/Details";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Products from "../Products/Products";

function Home() {
	const location = useLocation();
	return (
		<>
			<NavBar />
			<Slides />
			<Link to={"/farmastack/products"}>
				<button>Products</button>
			</Link>
			{location.pathname === "/farmastack/products" && (
				<>
					<SlideBottom />
					<Products />
				</>
			)}
			<Footer />
			<NavBar />
		</>
	);
}

export default Home;
