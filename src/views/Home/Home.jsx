import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Cards from "../../Components/Cards/Cards";
import Slides from '../../Components/Slides/Slide';

function Home() {
	return (
		<>
			<NavBar />
			<Slides />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;