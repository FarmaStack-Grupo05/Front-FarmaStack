import React from "react";
import { useSelector } from "react-redux";

const TableOrders = () => {
	const { ordersList } = useSelector((state) => state.orderState);
	return (
		<>
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
					<thead className="ltr:text-left rtl:text-right">
						<tr>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Active
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Price
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Date
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								User Name
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								User Email
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								User Address
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
									<td className="px-4 py-2">
										<label className="sr-only" htmlFor="Row1">
											Row 1
										</label>

										<input
											className="h-5 w-5 rounded border-gray-300"
											type="checkbox"
											id="Row1"
										/>
									</td>
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{order.total_price}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										Date
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										farmastack
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										faramastack@
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										Address
									</td>
									<td className="whitespace-nowrap px-4 py-2">phone</td>
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
