import React from "react";

const TableProducts = () => {
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
								Name
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Description
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Image
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Category
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Price
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Stock
							</th>

							<th className="px-4 py-2"></th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200">
						<tr>
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
								Aspirin
							</td>
							<td className="whitespace-nowrap px-1 py-2 text-gray-700">
								Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to
								treat pain, fever, and inflammation.
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								https://www.ecured.cu/images/f/f1/Foto_de_Ibuprofeno.JPG
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								Medicines
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								6.99
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">5</td>
							<td className="whitespace-nowrap px-4 py-2">
								<a
									href="#"
									className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
								>
									Delete
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default TableProducts;
