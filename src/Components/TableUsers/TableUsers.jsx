import React from "react";

const TableUsers = () => {
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
								Email
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Address
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Phone
							</th>
							<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
								Rol
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
								Emmanuel Nuñez
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								emmanuel@email.com
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								cll falsa 123
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								32244556677
							</td>
							<td className="whitespace-nowrap px-4 py-2 text-gray-700">
								Admin
							</td>
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

export default TableUsers;
