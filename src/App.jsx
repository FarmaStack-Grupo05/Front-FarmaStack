import { Route, Routes, useLocation } from "react-router-dom";
import {
	AboutUs,
	Dashboard,
	Details,
	Home,
	Payment,
	Products,
	Profile,
} from "./views/index";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactMe from "./Components/Contact/ContactMe";
import Footer from "./Components/Footer/Footer";
import LoginButton from "./Components/NavBar/LoginButton";
import NavBar from "./Components/NavBar/NavBar";
import { getCart } from "./redux/slices/cart/sliceCart";
import { getUser } from "./redux/slices/users/sliceUsers";
import FormRegister from "./Components/FormRegister/FormRegister";
import TableProducts from "./Components/TableProducts/TableProducts";
import EditProduct from "./Components/EditProduct/EditProduct";
import FormProduct from "./Components/FormProduct/FormProduct";

// npx tailwindcss -i ./src/style.css -o ./dist/output.css--watch  ***PARA ACTUALIZAR ESTILOS*********
function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

	useEffect(() => {
		const getAccessToken = async () => {
			const accessToken = await getAccessTokenSilently();
			localStorage.setItem("token", accessToken);
		};

		if (isAuthenticated) {
			getAccessToken();
			dispatch(getUser(user));
			dispatch(getCart(user.sub));
		} else {
			localStorage.removeItem("token");
			dispatch(getUser({}));
		}
	}, [isAuthenticated]);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/farmastack/aboutus" element={<AboutUs />} />
				<Route path="/farmastack/details/:id" element={<Details />} />
				<Route path="/farmastack/payment" element={<Payment />} />
				<Route path="/farmastack/profile" element={<Profile />} />
				<Route path="/farmastack/products" element={<Products />} />
				<Route path="/farmastack/contact" element={<ContactMe />} />
				<Route path="/farmastack/auth" element={<LoginButton />} />
				<Route
					exact
					path="farmastack/formRegister"
					element={<FormRegister />}
				/>
			</Routes>
			<Routes>
				<Route path="/dashboard/*" element={<Dashboard />}>
					<Route exact path="products" element={<TableProducts />} />
					<Route exact path="editProduct/:id" element={<EditProduct />} />
					<Route exact path="addProduct" element={<FormProduct />} />
				</Route>
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
