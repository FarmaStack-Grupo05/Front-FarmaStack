import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { getDataBaseUser, getUser } from "../../redux/slices/users/sliceUsers";

const Profile = () => {
	const dispatch = useDispatch();
	const { user, isAuthenticated, isLoading } = useAuth0();
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		image: "",
	});

	console.log(user);
	if (isLoading) {
		return <div>Loading ...</div>;
	}

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
			const response = await axios.post(
				`http://localhost:3001/products/upload`,
				formData
			);
			setInputs({
				...inputs,
				image: response.data.secure_url,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const { name, price, category, description, image } = inputs;
		if (![name, price, category, description, image].every(Boolean)) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Datos incompletos",
			});
		} else {
			try {
				await axios.put(`http://localhost:3001/user/edit/${id}`, inputs);
				Swal.fire({
					icon: "success",
					title: "Great !",
					text: `Se edito el usuario ${id}`,
				});
				navigate("/dashboard/products");
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		dispatch(getDataBaseUser(user.email));
		dispatch(getUser(user));
	}, [dispatch]);
	console.log(inputs);

	return (
		isAuthenticated && (
			<div className="flex place-content-center mt-10">
				<section className="bg-gray-100">
					<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
						<form action="" className="space-y-4">
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
								<div>
									<label className="sr-only" htmlFor="name">
										Name
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Name"
										type="text"
										id="name"
										name="name"
										onChange={handlerChange}
									/>
								</div>
								<div>
									<label className="sr-only" htmlFor="email">
										Email
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Email"
										type="text"
										id="email"
										name="email"
										onChange={handlerChange}
									/>
								</div>
								<div>
									<label
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										htmlFor="file_input"
									>
										Upload file
									</label>
									<input
										className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
										id="file_input"
										type="file"
										onChange={handlerUpload}
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2"></div>

							<div className="mt-4">
								<button
									onClick={onSubmit}
									type="submit"
									className="inline-flex px-5 py-3 text-white bg-green-500 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3"
								>
									Update
								</button>
							</div>
						</form>
					</div>
				</section>
				<section
					className="flex-grow-0 flex-shrink-0 bg-gray-100 ml-6"
					style={{ width: "40%" }}
				>
					<div className="rounded-sm bg-white p-8 shadow-lg sm:col-span-3 sm:p-2">
						<h1>Name : {user.name}</h1>
						<h1>Email : {user.email}</h1>
						<div className="whitespace-nowrap px-4 py-4 w-9/12 flex">
							<div className="w-9/12">
								<img src={user.picture} alt={user.name} />
							</div>
							<div className="w-1/2 mt-10 ml-6 mr-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 9h16.5m-16.5 6.75h16.5"
									/>
								</svg>
							</div>
							<div className="w-9/12">
								<img src={inputs.image} alt={inputs.name} />
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	);

	// useEffect(()=>{
	//   dispatch(getUser(user))
	//   console.log("Profile")
	// }, [dispatch])

	// return (
	//   isAuthenticated && (
	//     <div>
	//       <img src={user.picture} alt={user.name} />
	//       <h2>{user.name}</h2>
	//       <p>{user.email}</p>
	//     </div>
	//   )
	// );
};

export default Profile;
