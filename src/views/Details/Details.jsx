import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProducts } from "../../redux/slices/cart/sliceCart";
import { getProductById } from "../../redux/slices/products/sliceProducts";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

const Details = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { detail } = useSelector((state) => state.productsState);
	const cart = useSelector((state) => state.cartState);
	const [productQuantity, setProductQuantity] = useState(1);
	const productInCart = cart.products.find(
		(product) => product.id === detail.id
	);
	const { loginWithRedirect, isAuthenticated, user } = useAuth0();

	const handleAddQuantity = () => {
		setProductQuantity(productQuantity + 1);
	};

	const handleSubtractQuantity = () => {
		if (productQuantity > 1) {
			setProductQuantity(productQuantity - 1);
		}
	};

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch, id]);

	const handlerProduct = () => {
		if (isAuthenticated) {
			dispatch(addProducts(user.sub, detail, productQuantity));
		} else {
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
					loginWithRedirect();
				}
			});
		}
	};

	return (
		<div className="flex justify-center items-center flex-col">
			<div className="no-underline text-decoration-none lg:col-span-3 shadow-xl h-full w-1/3 p-5 rounded-3xl">
				{" "}
				{/* Añade la clase "flex-col" para que los elementos se coloquen en una columna */}
				<div className="group relative block overflow-hidden">
					<button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
						<span className="sr-only">Wishlist</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-4 w-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					</button>

					<div className="flex justify-center mt-10 p-3">
						<img
							src={detail?.image}
							alt={detail?.name}
							className=" h-auto w-auto rounded-3xl object-cover transition duration-500 group-hover:scale-105"
						/>
					</div>

					<div className="no-underline text-decoration-none h-1/3 w-auto m-2 p-5 rounded-3xl">
						<h3 className="mt-4 text-sm font-medium text-gray-700">
							Description:
						</h3>
						<span className="text-xs font-medium">{detail?.description}</span>

						<h3 className="mt-4 text-lg font-medium text-gray-700">
							{detail?.name}
						</h3>

						<p className="mt-1.5 text-lg text-gray-700">{detail?.price}</p>

						<button
							onClick={handlerProduct}
							className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
						>
							Add to Cart
						</button>
						<div className="flex items-center justify-between">
							<button
								onClick={handleSubtractQuantity}
								type="button"
								className="bg-yellow-300 rounded-full p-1 font-bold my-2 hover:bg-yellow-400 transition hover:shadow-lg"
							>
								<MinusIcon className="h-6 w-6" aria-hidden="true" />
							</button>
							<span>{productQuantity}</span>
							<button
								onClick={handleAddQuantity}
								type="button"
								className="bg-yellow-300 rounded-full p-1 font-bold my-2 hover:bg-yellow-400 transition hover:shadow-lg"
							>
								<PlusIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						{productInCart?.quantity > 0 && (
							<p className="mt-1.5 text-sm font-medium text-gray-500">
								You already have this product {productInCart.quantity} times in
								your cart
							</p>
						)}
					</div>
				</div>
			</div>
			<a
				href="/"
				className="block mt-4 font-medium text-gray-500 hover:text-green-500"
			>
				Volver a Home
			</a>
		</div>
	);
};

export default Details;
