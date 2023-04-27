import { Route, Routes,} from "react-router-dom";
import {
	AboutUs,
	Details,
	FormRegister,
	Home,
	Payment,
	Profile,
	Products,
} from "./views/index";


function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					exact
					path="/farmastack/registrarse"
					element={<FormRegister />}
				/>
				<Route exact path="/farmastack/nosotros" element={<AboutUs />} />
				<Route exact path="/farmastack/detalle/:id" element={<Details />} />
				<Route exact path="/farmastack/payment" element={<Payment />} />
				<Route path="/farmastack/profile" element={<Profile />}>
					<Route path="informacion-personal" element={<Profile />} />
				</Route>
				<Route exact path="/farmastack/products" element={<Products />} />
				
			</Routes>
		</>
	);
}

export default App;
