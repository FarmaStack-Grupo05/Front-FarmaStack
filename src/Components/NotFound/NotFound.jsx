import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

const NotFound = () => {
	const { loginWithPopup } = useAuth0();
	const handlerLogin = () => {
		Swal.fire({
			title: "You must be logged in to add products to the cart",
			text: "After logging in, you need to add the product again",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Login",
		}).then((result) => {
			if (result.isConfirmed) {
				loginWithPopup();
			}
		});
	};
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="max-w-md mx-auto text-center">
				<h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
				<p className="text-xl font-medium mb-8 text-gray-600">
					¡Oops! La página que buscas no existe.
				</p>
				<p className="text-xl font-medium mb-8 text-gray-600">
					No estas logeado por favor logeate
				</p>
				<button onClick={handlerLogin}>Login</button>
				<Link
					to="/"
					className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300"
				>
					Volver al inicio
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
