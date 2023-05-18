import { Route, Routes } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import ContactMe from "./Components/Contact/ContactMe";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

import EditProduct from "./Components/EditProduct/EditProduct";
import FormProduct from "./Components/FormProduct/FormProduct";
import FormRegister from "./Components/FormRegister/FormRegister";
import TableProducts from "./Components/TableProducts/TableProducts";
import { clearCart, getCart } from "./redux/slices/cart/sliceCart";
import { getDataBaseUser, getUser } from "./redux/slices/users/sliceUsers";
import PaymentSuccess from "./views/PaymentSuccess/PaymentSuccess";

import NotFound from "./Components/NotFound/NotFound";
import { setDbUser } from "./redux/slices/users";
import Admin from "./Components/Admin/Admin";
import getOrders from "./redux/slices/orders/sliceOrder";
import TableOrders from "./Components/TableOrders/TableOrders";
import UserPurchases from "./views/userPurcharses/userPurchases";
import Swal from "sweetalert2";
// npx tailwindcss -i ./src/style.css -o ./dist/output.css--watch  ***PARA ACTUALIZAR ESTILOS*********
function App() {
	const dispatch = useDispatch();
	const { getAccessTokenSilently, isAuthenticated, user, logout } = useAuth0();

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
			dispatch(getOrders());
		} else {
			localStorage.removeItem("token");
			dispatch(getUser({}));
			dispatch(clearCart());
			dispatch(setDbUser(null));
		}
	}, [dispatch, getAccessTokenSilently, isAuthenticated, user]);

	const { dataBaseUser } = useSelector((state) => state.userState);

	useEffect(() => {
		if (dataBaseUser && !dataBaseUser.active) {
			Swal.fire({
				title: "Usuario Bloqueado",
				text: "Comuniquese con el administrador",
				icon: "error",
				confirmButtonText: "Ok",
			}).then((result) => {
				if (result.isConfirmed) {
					logout();
				}
			});
		}
	}, [dataBaseUser, logout]);

	return (
		<>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/farmastack/aboutus" element={<AboutUs />} />
				<Route exact path="/farmastack/details/:id" element={<Details />} />
				<Route exact path="/farmastack/payment" element={<Payment />} />
				<Route
					exact
					path="/farmastack/payment/:paymentId"
					element={<PaymentSuccess />}
				/>
				<Route
					path="/farmastack/profile"
					element={isAuthenticated ? <Profile /> : <NotFound />}
				/>
				<Route
					path="farmastack/dashboard"
					element={isAuthenticated ? <Dashboard /> : <Admin />}
				/>
				<Route exact path="/farmastack/products" element={<Products />} />
				<Route exact path="/farmastack/contact" element={<ContactMe />} />
				<Route
					exact
					path="/farmastack/purchases"
					element={isAuthenticated ? <UserPurchases /> : <NotFound />}
				/>

				<Route
					exact
					path="farmastack/formRegister"
					element={<FormRegister />}
				/>
			</Routes>
			<Routes>
				{/* {dataBaseUser?.rol === "admin" && ( */}
				<Route path="/dashboard/" element={<Dashboard />}>
					<Route exact path="products" element={<TableProducts />} />
					<Route exact path="users" element={<TableProducts />} />
					<Route exact path="orders" element={<TableOrders />} />
					<Route exact path="editProduct/:id" element={<EditProduct />} />
					<Route exact path="addProduct" element={<FormProduct />} />
					<Route exact path="*" element={<NotFound />} />
				</Route>
				{/* )} */}
			</Routes>
			<Footer />
		</>
	);
}

export default App;
