
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Slides from '../../Components/Slides/Slide';
import SlideBottom from "../../Components/Slides/SlideBottom";
import Details from "../Details/Details";
import { Link } from "react-router-dom";


function Home() {
	return (
		<>
			<Slides />
			<Details />
			<SlideBottom />
			<Link to={"/farmastack/products"}>
				<button>Products</button>
			</Link>
			<Footer />
		
		</>
	);
}

export default Home;
