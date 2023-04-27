import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";
import Slide from "./Components/Slides/Slide";

function App() {
	return (
		<>
			<NavBar />
			<Slide />
			<Cards />
			<Footer />
			<Pagination />
		</>
	);
}

export default App;
