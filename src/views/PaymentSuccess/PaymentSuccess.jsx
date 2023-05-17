import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";

function PaymentSuccess() {
	const { paymentId } = useParams();
	const [payment, setPayment] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const cart = useSelector((state) => state.cartState);
	const { dataBaseUser: user } = useSelector((state) => state.userState);

	useEffect(() => {
		const getPayment = async () => {
			const { data } = await axios.get(`${API_URL}/order`, {
				params: {
					paymentId,
				},
			});
			setPayment(data);
			setIsLoading(false);
		};

		if (user) {
			getPayment();
		}
	}, [cart.products, paymentId, user]);

	console.log(payment);
	if (isLoading) {
		return (
			<div className="py-6 px-4 flex flex-col items-center">
				<div className="max-w-2xl shadow-lg w-full px-4 md:px-6 py-4 border">
					<h1 className="text-2xl font-bold">Loading...</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="py-6 px-4 flex flex-col items-center">
			<div className="max-w-2xl shadow-lg w-full px-4 md:px-6 py-4 border">
				<p className="text-sm text-gray-700 my-2">
					Payment ID: {payment?.payment_id}
				</p>
				<h1 className="text-2xl font-bold">Payment Success</h1>
				<p className="text-md text-gray-700 my-2">
					Congratulations! Your payment was successful. Here are the details of
					your purchase:
				</p>

				<h2 className="text-xl font-bold mt-4">Products:</h2>
				<ul>
					{payment?.OrderItems.map(({ Product, subtotal, price, quantity }) => (
						<li
							className="flex justify-between items-center py-4 px-8 border-b"
							key={Product.id}
						>
							<div className="flex items-center">
								<img
									src={Product.image}
									alt={Product.name}
									className="w-16 h-16 object-cover rounded-full"
								/>
								<div className="ml-4">
									<h2 className="text-md font-bold">{Product.name}</h2>
									<p className="text-sm text-gray-700">
										Quantity: <span className="font-bold">{quantity}</span>
									</p>
								</div>
							</div>
							<div className="flex flex-col items-end">
								<p className="font-bold">
									$
									{typeof subtotal === "number"
										? subtotal.toFixed(2)
										: subtotal}
								</p>
								<p className="text-sm text-gray-500">
									${typeof price === "number" ? price.toFixed(2) : price}/each
									one
								</p>
							</div>
						</li>
					))}
				</ul>
				<div className="flex justify-between items-center py-4 px-8">
					<h1 className="text-xl font-semibold">Total:</h1>
					<p className="text-2xl font-bold">
						$
						{typeof payment.total_price === "number"
							? payment.total_price.toFixed(2)
							: payment.total_price}
					</p>
				</div>
			</div>

			<h2 className="text-xl font-bold mt-4">Delivery:</h2>
			<div className="max-w-2xl shadow-lg w-full px-4 md:px-6 py-4 border">
				<p className="text-md text-gray-500 my-2">
					Your order will be delivered in the following 2-4 days to:
				</p>
				<p className="text-md text-gray-700 my-2">
					<span className="font-bold">Name: </span>
					{user?.name}
				</p>
				<p className="text-md text-gray-700 my-2">
					<span className="font-bold">Address: </span>
					{user?.address}
				</p>
			</div>
			<Link
				to="/farmastack/purchases"
				className="font-medium text-green-600 hover:text-green-500 mt-6"
			>
				Rate Purchases
			</Link>
			<Link
				to="/farmastack/products"
				className="font-medium text-green-600 hover:text-green-500 mt-6"
			>
				Continue Shopping
			</Link>
		</div>
	);
}

export default PaymentSuccess;
