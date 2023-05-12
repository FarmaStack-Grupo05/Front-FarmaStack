import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../redux/slices/users/sliceUsers";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const TableUsers = () => {
	const dispatch = useDispatch();
	const [shouldReload, setShouldReload] = useState(false);

	const handlerActive = async (id) => {
		try {
			await axios.put(`http://localhost:3001/user/${id}`);
		} catch (error) {
			console.log(error);
		}
	};
	const handlerChange = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, active it!",
		}).then((result) => {
			if (result.isConfirmed) {
				handlerActive(id);
				Swal.fire("Activate!", "The product has change state.", "success");
			}
		});
	};

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch, shouldReload]);
	const { list } = useSelector((state) => state.userState);
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
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200">
						{list?.map((user) => {
							return (
								<tr key={user.id}>
									<td className="px-4 py-2">
										<label className="sr-only" htmlFor="Row1">
											Row {user.id}
										</label>

										<input
											className="h-5 w-5 rounded border-gray-300"
											type="checkbox"
											id="Row1"
											checked={user.active}
											onChange={() => {
												handlerChange(user.id);
												setShouldReload(!shouldReload);
											}}
										/>
									</td>
									<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{user.name}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{user.email}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{user.address}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{user.phone}
									</td>
									<td className="whitespace-nowrap px-4 py-2 text-gray-700">
										{user.rol}
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

export default TableUsers;
