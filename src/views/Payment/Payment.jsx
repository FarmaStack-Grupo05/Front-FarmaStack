import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const paypalOptions = {
	"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID, // Viene de Paypal
	currency: "USD", // En que moneda se va a cobrar
	intent: "capture", // Cobra de una vez
};

function Payment() {
	const handleCreateOrder = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: "100.00",
					},
				},
			],
		});
	};

	return (
		<PayPalScriptProvider options={paypalOptions}>
			<PayPalButtons
				createOrder={handleCreateOrder}
				style={{ layout: "horizontal" }}
			/>
		</PayPalScriptProvider>
	);
}

export default Payment;