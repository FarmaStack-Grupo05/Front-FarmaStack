import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/slices/cart/sliceCart";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../utils/api";
import Swal from "sweetalert2";

/** @type {import("@paypal/react-paypal-js").ReactPayPalScriptOptions} */
const paypalOptions = {
	"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, // Viene de Paypal
	currency: "USD", // En que moneda se va a cobrar
	intent: "capture", // Cobra de una vez
};

function Payment() {
	const cart = useSelector((state) => state.cartState);
	const navigate = useNavigate();
	const { user: auth0User } = useSelector((state) => state.userState);
	const { dataBaseUser, isLoadingDbUser } = useSelector((state) => state.userState);
	const dispatch = useDispatch();

	const handleCreateOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: cart.totalPrice,
					},
				},
			],
		});
	};

	const handlePaymentSuccess = async (data) => {
		const paymentId = data.orderID;
		const order = {
			paymentId,
			userAuth0Id: auth0User.sub,
			userId: dataBaseUser.id,
		}
		const { data: paymentData } = await axios.post(`${API_URL}/order`, order)
		dispatch(clearCart())
		navigate(`/farmastack/payment/${paymentData.payment_id}`)
	}

	const handlePaymentError = (error) => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'There was an error processing your payment. Please try again later.',
		});
		console.error(error);
	}

	useEffect(() => {
		if (!dataBaseUser && !isLoadingDbUser) {
			navigate("/farmastack/formRegister");
		}
	}, [dataBaseUser, navigate])

	return (
		<PayPalScriptProvider options={paypalOptions}>
			<div className="grid grid-cols-3 flex-wrap mx-auto max-w-4xl gap-4 md:gap-8 items-start my-8">
				<div className=" shadow col-span-3 md:col-span-2 px-2 md:px-4 py-4">
					<h1 className="text-2xl font-bold">Summary:</h1>
					<p className="text-md text-gray-700 my-2">
						Different Products in the Cart: {cart.products.length}
					</p>
					<ul className="divide-y divide-gray-300 divide-solid">
						{cart.products.map((product) => (
							<li
								className="flex justify-between items-center py-4 px-8 border-b"
								key={product.id}
							>
								<div className="flex items-center">
									<img
										src={product.image}
										alt={product.name}
										className="w-16 h-16 object-cover rounded-full"
									/>
									<div className="ml-4">
										<h2 className="text-md font-bold">{product.name}</h2>
										<p className="text-sm text-gray-700">
											Quantity:{" "}
											<span className="font-bold">{product.quantity}</span>
										</p>
									</div>
								</div>
								<div className="flex flex-col items-end">
									<p className="font-bold">${product.subtotal}</p>
									<p className="text-sm text-gray-500">
										${product.price}/each one
									</p>
								</div>
							</li>
						))}
					</ul>
					<div className="flex justify-between items-center py-4 px-8">
						<h1 className="text-xl font-semibold">Total:</h1>
						<p className="text-2xl font-bold">${cart.totalPrice}</p>
					</div>
				</div>

				<div className="border-l shadow-lg col-span-3 md:col-span-1 px-4 md:px-8">
					<h1 className="text-xl font-semibold my-4">Payment methods:</h1>
					<PayPalButtons
						createOrder={handleCreateOrder}
						onApprove={handlePaymentSuccess}
						onError={handlePaymentError}
						style={{ layout: "vertical" }}
						forceReRender={[cart.totalPrice]}
					/>
				</div>
			</div>
		</PayPalScriptProvider>
	);
}

export default Payment;
