
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Cards from "../Details/Details";

import { Link } from "react-router-dom";


function Home() {
	return (
		<>
			<NavBar />
			<Cards />
			<Link to={"/farmastack/products"}>
				<button>Products</button>
			</Link>
			<Footer />
		
		</>
	);
}

export default Home;
