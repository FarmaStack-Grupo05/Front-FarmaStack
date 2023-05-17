import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getOrders from "../../redux/slices/orders/sliceOrder";
import Swal from "sweetalert2";

const TableOrders = () => {
	const ordersList = useSelector((state) => state.orderState.orderList);

	const handlerDetail = (items) => {
		// Crear un elemento div para contener el contenido personalizado
		const content = document.createElement("div");

		// Recorrer los items y agregar los elementos correspondientes al contenido personalizado
		items.forEach((item) => {
			const itemContainer = document.createElement("div");

			// Agregar imagen
			const imageElement = document.createElement("img");
			imageElement.src = item.Product.image;
			imageElement.alt = "Custom image";
			imageElement.style.width = "100px"; // Establecer el ancho deseado
			imageElement.style.height = "auto"; // Permitir que la altura se ajuste automáticamente
			imageElement.style.marginBottom = "4px"; // Agregar margen inferior de 4px
			itemContainer.appendChild(imageElement);

			// Agregar texto
			const titleElement = document.createElement("h4");
			titleElement.textContent = `Quantity: ${item.quantity}`;
			itemContainer.appendChild(titleElement);

			const textElement = document.createElement("p");
			textElement.textContent = `$ ${item.price} Und.`;
			itemContainer.appendChild(textElement);

			content.appendChild(itemContainer);
		});

		// Mostrar la alerta de Swal con el contenido personalizado
		Swal.fire({
			title: "Orders Details",
			html: content,
			customClass: {
				content: "py-4", // Agrega padding vertical al contenido para espaciarlo
			},
		});
	};
	return (
		<>
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
					<thead className="ltr:text-left rtl:text-right">
						<tr>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Date
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Total Price
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								User Name
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								User Email
							</th>

							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								User Phone
							</th>

							<th className="px-4 py-2"></th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200">
						{ordersList?.map((order, index) => {
							return (
								<tr key={index}>
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{order.updatedAt.slice(0, 10)}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{order.total_price}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{order.User.name}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{order.User.email}
									</td>

									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{order.User.phone}
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										<button
											onClick={() => handlerDetail(order.OrderItems)}
											style={{ textDecoration: "underline" }}
										>
											Details...
										</button>{" "}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TableOrders;
