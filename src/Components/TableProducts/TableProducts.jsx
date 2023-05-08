import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/slices/products/sliceProducts";

const TableProducts = () => {
	const dispatch = useDispatch();
	const { allProducts } = useSelector((state) => state.productsState);
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

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
						{allProducts?.map((product) => {
							return (
								<tr key={product.id}>
									<td className="px-4 py-2">
										<label className="sr-only" htmlFor="Row1">
											Row {product.id}
										</label>

										<input
											className="h-5 w-5 rounded border-gray-300"
											type="checkbox"
											id="Row1"
											checked={product.active}
											readOnly
										/>
									</td>
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{product.name}
									</td>
									<td className="whitespace-nowrap text-xs py-2 text-gray-700">
										{product.description}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										<img src={product.image} alt={product.name} />
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{product.category}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{product.price}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										5
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										<Link
											to="#"
											className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
										>
											Delete
										</Link>
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

export default TableProducts;
