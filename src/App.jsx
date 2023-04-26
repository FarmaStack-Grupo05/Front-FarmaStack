import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";

function App() {
	return (
		<>
			<NavBar />
			<Cards />
			<Footer />
		</>
	);
}

export default App;
