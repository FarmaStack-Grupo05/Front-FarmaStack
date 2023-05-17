import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/slices/products/sliceProducts";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../utils/api";

const TableProducts = () => {
	const dispatch = useDispatch();

	const handlerActive = async (id) => {
		try {
			await axios.put(`${API_URL}/products/${id}`);
			dispatch(getAllProducts(true));
		} catch (error) {
			console.log(error);
		}
	};
	const handlerChange = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You are about to change the active status of this product!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: `Yes, ${
				allProducts.find((p) => p.id === id).active ? "deactivate" : "activate"
			} it!`,
		}).then((result) => {
			if (result.isConfirmed) {
				handlerActive(id);
				Swal.fire("Done!", "Your product has been updated.", "success");
			}
		});
	};

	const handlerDescription = (description) => {
		Swal.fire(description);
	};
	useEffect(() => {
		dispatch(getAllProducts(true));
	}, [dispatch]);
	const { allProducts } = useSelector((state) => state.productsState);

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
											onChange={() => {
												handlerChange(product.id);
											}}
										/>
									</td>
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{product.name}
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										<button
											onClick={() => handlerDescription(product.description)}
											style={{ textDecoration: "underline" }}
										>
											Description...
										</button>
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										<img
											src={product.image}
											alt={product.name}
											style={{ width: "100px", height: "100px" }}
										/>
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{product.category}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{`$ ${product.price}`}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{product.stock}
									</td>
									<td className="whitespace-nowrap px-4 py-2">
										<Link
											to={`/dashboard/editProduct/${product.id}`}
											className="inline-flex px-5 py-2 text-green-500 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-500 rounded-md mb-3"
										>
											Edit
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
