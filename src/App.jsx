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

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import LoginButton from "./Components/NavBar/LoginButton";
import ContactMe from "./Components/Contact/ContactMe";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUser, getDataBaseUser } from "./redux/slices/users/sliceUsers";
import FormRegister from "./Components/FormRegister/FormRegister";
import TableProducts from "./Components/TableProducts/TableProducts";
import EditProduct from "./Components/EditProduct/EditProduct";
import FormProduct from "./Components/FormProduct/FormProduct";
import { clearCart, getCart } from "./redux/slices/cart/sliceCart";
import PaymentSuccess from "./views/PaymentSuccess/PaymentSuccess";

import { useNavigate } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import { setDbUser } from "./redux/slices/users";
// npx tailwindcss -i ./src/style.css -o ./dist/output.css--watch  ***PARA ACTUALIZAR ESTILOS*********
function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
	const navigate = useNavigate();
	const refreshPage = () => {
		navigate(0);
	};
	const sarasa = localStorage.getItem("token");
	console.log(sarasa);

	useEffect(() => {
		const getAccessToken = async () => {
			const accessToken = await getAccessTokenSilently();
			localStorage.setItem("token", accessToken);
		};

		if (isAuthenticated) {
			getAccessToken();
			dispatch(getUser(user));
			dispatch(getCart(user.sub));
			dispatch(getDataBaseUser(user.email));
		} else {
			localStorage.removeItem("token");
			dispatch(getUser({}));
			dispatch(clearCart());
			dispatch(setDbUser(null));
		}
	}, [dispatch, getAccessTokenSilently, isAuthenticated, user]);

	return (
		<>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/farmastack/aboutus" element={<AboutUs />} />
				<Route exact path="/farmastack/details/:id" element={<Details />} />
				<Route exact path="/farmastack/payment" element={<Payment />} />
				<Route exact path="/farmastack/payment/:paymentId" element={<PaymentSuccess />} />
				{sarasa && <Route path="/farmastack/profile" element={<Profile />} />}
				<Route exact path="/farmastack/products" element={<Products />} />
				<Route exact path="/farmastack/contact" element={<ContactMe />} />

				{sarasa && (
					<Route
						exact
						path="farmastack/formRegister"
						element={<FormRegister />}
					/>
				)}
			</Routes>
			<Routes>
				<Route path="/dashboard/" element={<Dashboard />}>
					<Route exact path="products" element={<TableProducts />} />
					<Route exact path="users" element={<TableProducts />} />
					<Route exact path="editProduct/:id" element={<EditProduct />} />
					<Route exact path="addProduct" element={<FormProduct />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
