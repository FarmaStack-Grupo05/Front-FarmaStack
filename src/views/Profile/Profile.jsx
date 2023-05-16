import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { getDataBaseUser, getUser } from "../../redux/slices/users/sliceUsers";
import { API_URL } from "../../utils/api";

const Profile = () => {
	const dispatch = useDispatch();
	const { user, isAuthenticated, isLoading } = useAuth0();
	const navigate = useNavigate();
	const { dataBaseUser } = useSelector((state) => state.userState);

	const [inputs, setInputs] = useState({
		name: "",
		phone: "",
		email: "",
		address: "",
		image: "",
	});

	const handlerChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const handlerUpload = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("image", event.target.files[0]);
		try {
			const response = await axios.post(`${API_URL}/products/upload`, formData);
			setInputs({
				...inputs,
				image: response.data.secure_url,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handlerDelete = () => {
		setInputs({
			...inputs,
			image: "",
		});
	};

	const handleDefaultPic = (e) => {
		e.preventDefault();
		if (dataBaseUser.image) {
			setInputs({
				...inputs,
				image: dataBaseUser.image,
			});
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const { name, phone, address, email, image } = inputs;
		if (![name, phone, address, email, image].every(Boolean)) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Datos incompletos",
			});
		} else {
			try {
				await axios.put(`${API_URL}/user/edit/${dataBaseUser.id}`, inputs);
				Swal.fire({
					icon: "success",
					title: "Great !",
					text: `Se edito el usuario exitosamente !`,
				});
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		dispatch(getDataBaseUser(user.email));
	}, [dispatch]);

	useEffect(() => {
		if (dataBaseUser) {
			setInputs({
				name: dataBaseUser.name,
				email: dataBaseUser.email,
				image: dataBaseUser.image,
				phone: dataBaseUser.phone,
				address: dataBaseUser.address,
			});
		}
	}, [dataBaseUser]);

	const goToRegister = () => {
		Swal.fire({
			title: "You are not registered",
			text: "First you must register in our database",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, I want to register!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("OK!", "We will redirect you.", "success");
				navigate("/farmastack/formRegister");
			} else {
				navigate("/");
			}
		});
	};

	return dataBaseUser ? (
		<div className="flex flex-col items-center justify-center mt-10">
			<section className="bg-gray-100">
				<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
					<h1 className="text-4xl font-semibold mb-2 text-center text-green-800">
						Uplad your Profile
					</h1>
					<form action="" className="space-y-4 mt-6">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="name">Name</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									placeholder="Name"
									type="text"
									id="name"
									name="name"
									value={inputs.name}
									onChange={handlerChange}
								/>
								<label htmlFor="phone">Phone</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									placeholder="Phone"
									type="text"
									id="phone"
									name="phone"
									value={inputs.phone}
									onChange={handlerChange}
								/>
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									placeholder="Email"
									type="email"
									id="email"
									defaultValue={inputs.email}
									disabled
								/>
								<small
									id="email-helper"
									className="block text-gray-400 text-xs mt-1"
								>
									This email should not be edited
								</small>
								<label htmlFor="address">Address</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									placeholder="Address"
									type="text"
									id="address"
									name="address"
									value={inputs.address}
									onChange={handlerChange}
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row sm:justify-between">
							<div className="sm:mr-8">
								<label
									className="block mb-2 text-ml font-medium text-green-900 dark:text-white"
									htmlFor="file_input"
								>
									Upload file
								</label>
								{inputs.image ? (
									<div className="flex flex-wrap gap-4">
										<img
											className="w-20 h-20 object-cover rounded-full border"
											src={inputs.image}
											alt="avatar"
										/>
										<button
											onClick={handlerDelete}
											className="text-sm text-green-500 hover:text-green-700 focus:text-green-700"
										>
											Change picture
										</button>
									</div>
								) : (
									<div className="flex flex-wrap gap-4">
										<input
											className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
											id="file_input"
											type="file"
											onChange={handlerUpload}
										/>
										{dataBaseUser.picture && (
											<button
												type="button"
												onClick={handleDefaultPic}
												className="text-sm text-green-500 hover:text-green-700 focus:text-green-700"
											>
												Use default picture
											</button>
										)}
									</div>
								)}
							</div>

							<div className="mt-4 ml-60 w-2/3">
								<button
									onClick={onSubmit}
									type="submit"
									className="px-5 py-3 text-white bg-green-500 hover:bg-green-700 focus:bg-green-700 rounded-md mb-3"
								>
									Edit
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	) : (
		goToRegister()
	);
};

export default Profile;
