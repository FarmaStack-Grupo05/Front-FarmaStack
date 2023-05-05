import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux"

const paypalOptions = {
	"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, // Viene de Paypal
	currency: "USD", // En que moneda se va a cobrar
	intent: "capture", // Cobra de una vez
};

function Payment() {
	const cart = useSelector((state) => state.cartState)

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

	return (
		<PayPalScriptProvider options={paypalOptions}>
			<div className="grid grid-cols-3 flex-wrap mx-auto max-w-4xl gap-4 md:gap-8 items-start my-8">

				<div className=" shadow col-span-3 md:col-span-2 px-2 md:px-4 py-4">
					<h1 className="text-2xl font-bold">Resumen:</h1>
					<p className="text-md text-gray-700 my-2">
						Productos distintos en el carrito: {cart.products.length}
					</p>
					<ul className="divide-y divide-gray-300 divide-solid">
						{cart.products.map((product) => (
							<li className="flex justify-between items-center py-4 px-8 border-b" key={product.id}>
								<div className="flex items-center">
									<img
										src={product.image}
										alt={product.name}
										className="w-16 h-16 object-cover rounded-full"
									/>
									<div className="ml-4">
										<h2 className="text-md font-bold">
											{product.name}
										</h2>
										<p className="text-sm text-gray-700">
											Quantity: <span className="font-bold">{product.quantity}</span>
										</p>
									</div>
								</div>
								<p className="text-md font-bold">
									${product.price}
								</p>
							</li>
						))}
					</ul>
					<div className="flex justify-between items-center py-4 px-8">
						<h1 className="text-xl font-semibold">
							Total:
						</h1>
						<p className="text-2xl font-bold">
							${cart.totalPrice}
						</p>
					</div>
				</div>

				<div className="border-l shadow-lg col-span-3 md:col-span-1 px-4 md:px-8">
					<h1 className="text-xl font-semibold my-4">
						Metodos de pago:
					</h1>
					<PayPalButtons
						createOrder={handleCreateOrder}
						style={{ layout: "vertical" }}
					/>
				</div>

			</div>
		</PayPalScriptProvider>
	);
}

export default Payment;