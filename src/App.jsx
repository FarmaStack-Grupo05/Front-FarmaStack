import { Route, Routes } from "react-router-dom";
import {
	AboutUs,
	Details,
	FormRegister,
	Home,
	Payment,
	Profile,
	Products,
	FormProduct,
} from "./views/index";
import FilterProvider  from "./Components/Filter/FilterContext";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import LoginButton from "./Components/NavBar/loginButton";
import ContactMe from "./Components/Contact/ContactMe";
import LogoutButton from "./Components/NavBar/LogoutButton";



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
				<FilterProvider>
				<Route exact path="/farmastack/products" element={<Products />} />
				</FilterProvider>
				<Route exact path="/farmastack/auth" element={<LoginButton/>}></Route>
				<Route exact path="/farmastack/formProduct" element={<FormProduct />} />
				<Route exact path="/farmastack/contact" element={< ContactMe/>} />
				<Route exact path="/farmastack/logout" element={<LogoutButton/>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
