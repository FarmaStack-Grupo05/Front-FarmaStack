import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";
import CardsContainer from "./Components/CardsContainer/CardsContainer";

function App() {
	return (
		<>
			<NavBar />
			<Cards />
			<CardsContainer />
			<Pagination />
			<Footer />
		</>
	);
}

export default App;
