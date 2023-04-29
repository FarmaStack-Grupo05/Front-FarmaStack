
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Slides from "../../Components/Slides/Slides";
import Cards from "../Details/Details";
import { Link } from "react-router-dom";


function Home() {
	return (
		<>
			<NavBar />
			<Slides />
			<Cards />
			<Link to={"/farmastack/products"}>
				<button>Products</button>
			</Link>
			<Footer />
		
		</>
	);
}

export default Home;
