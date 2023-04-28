import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Cards from "../../Components/Cards/Cards";
import Slides from '../../Components/Slides/Slide';
import SlideBottom from "../../Components/Slides/SlideBottom";

function Home() {
	return (
		<>
			<NavBar />
			<Slides />
			<Cards />
			<SlideBottom />
			<Footer />
		</>
	);
}

export default Home;