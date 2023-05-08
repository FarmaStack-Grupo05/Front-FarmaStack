import { Route, Routes, useLocation } from "react-router-dom";
import {
	AboutUs,
	Details,
	FormRegister,
	Home,
	Payment,
	Profile,
	Products,
	Dashboard,
	Cart,
} from "./views/index";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import LoginButton from "./Components/NavBar/loginButton";
import ContactMe from "./Components/Contact/ContactMe";
import LogoutButton from "./Components/NavBar/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/slices/users/sliceUsers";
import { getCart } from "./redux/slices/cart/sliceCart";

// npx tailwindcss -i ./src/style.css -o ./dist/output.css--watch  ***PARA ACTUALIZAR ESTILOS*********
function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

	useEffect(() => {
		const getAccessToken = async () => {
			const accessToken = await getAccessTokenSilently();
			localStorage.setItem("token", accessToken);
		}

		if (isAuthenticated) {
			getAccessToken();
			dispatch(getUser(user));
			dispatch(getCart(user.sub));
		} else {
			localStorage.removeItem("token");
			dispatch(getUser({}));
		}
	}, [isAuthenticated])
	
	return (
		<>
			{location.pathname === "/dashboard" ? (
				<Routes>
					<Route exact path="/dashboard" element={<Dashboard />} />
				</Routes>
			) : (
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
						<Route exact path="/farmastack/contact" element={<ContactMe />} />
						<Route exact path="/farmastack/auth" element={<LoginButton />} />
						{/* <Route exact path="farmastack/logout" element={<LogoutButton />} /> */}
					</Routes>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
