import { Route, Routes } from "react-router-dom";
import {
	AboutUs,
	Details,
	FormRegister,
	Home,
	Payment,
	Profile,
	Products,
} from "./views/index";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactMe from "./Components/Contact/ContactMe";
// npx tailwindcss -i ./src/style.css -o ./dist/output.css--watch  ***PARA ACTUALIZAR ESTILOS*********
function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					exact
					path="/farmastack/registrarse"
					element={<FormRegister />}
				/>
				<Route exact path="/farmastack/aboutus" element={<AboutUs />} />
				<Route exact path="/farmastack/details/:id" element={<Details />} />
				<Route exact path="/farmastack/payment" element={<Payment />} />
				<Route path="/farmastack/profile" element={<Profile />}>
					<Route path="informacion-personal" element={<Profile />} />
				</Route>
				<Route exact path="/farmastack/products" element={<Products />} />
				<Route exact path="/farmastack/contact" element={< ContactMe/>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
