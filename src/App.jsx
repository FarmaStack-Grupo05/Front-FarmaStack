import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";
import Filter from "./Components/Filter/Filter";

function App() {
	return (
		<>
			<NavBar />
			<Cards />
			<Footer />
			<Filter/>
			<Pagination />
			
		</>
	);
}

export default App;
