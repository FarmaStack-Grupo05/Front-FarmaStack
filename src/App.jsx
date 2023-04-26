import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <>
      <NavBar />
	  <Cards/>
      <h1>Estoy en App.js</h1>
      <Footer />
    </>
  );
}

export default App;
