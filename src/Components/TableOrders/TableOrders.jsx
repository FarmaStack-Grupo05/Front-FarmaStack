import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getOrders from "../../redux/slices/orders/sliceOrder";
import Swal from "sweetalert2";

const TableOrders = () => {
	const ordersList = useSelector((state) => state.orderState.orderList);

	const handlerDetail = (items) => {
		console.log(items[0].Product.name);
		Swal.fire({
			title: `Quantity ${items[0].quantity}`,
			text: `$ ${items[0].price} Und.`,
			imageUrl: items[0].Product.image,
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: "Custom image",
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
