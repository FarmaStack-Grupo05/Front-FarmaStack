import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const FormProduct = () => {
	const [inputs, setInputs] = useState({
		name: "",
		price: "",
		category: "",
		description: "",
		image: "",
		stock: "",
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
				await axios.post("http://localhost:3001/products", inputs);
				Swal.fire({
					icon: "success",
					title: "Great !",
					text: "Nuevo producto creado",
				});
			} catch (error) {
				console.log(inputs);
			}
		}
	};
	return (
		<div>
			{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

			<section className="bg-gray-100">
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
						<div className="lg:col-span-2 lg:py-12">
							<p className="max-w-xl text-lg">
								At the same time, the fact that we are wholly owned and totally
								independent from manufacturer and other group control gives you
								confidence that we will only recommend what is right for you.
							</p>

							<div className="mt-8">
								<a href="" className="text-2xl font-bold text-pink-600">
									0151 475 4450
								</a>

								<address className="mt-2 not-italic">
									282 Kevin Brook, Imogeneborough, CA 58517
								</address>
							</div>
						</div>

						<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
							<form action="" className="space-y-4">
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

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label className="sr-only" htmlFor="email">
											Price
										</label>
										<input
											className="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Price"
											type="text"
											id="price"
											name="price"
											onChange={handlerChange}
										/>
									</div>
									<div>
										<label className="sr-only" htmlFor="email">
											Stock
										</label>
										<input
											className="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Stock"
											type="text"
											id="stock"
											name="stock"
											onChange={handlerChange}
										/>
									</div>

									<div>
										<label className="sr-only" htmlFor="phone">
											Category
										</label>
										<input
											className="w-full rounded-lg border-gray-200 p-3 text-sm"
											placeholder="Category"
											type="text"
											id="category"
											name="category"
											onChange={handlerChange}
										/>
									</div>
								</div>

								<div>
									<label className="sr-only" htmlFor="message">
										Description
									</label>

									<textarea
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Description"
										rows="8"
										id="description"
										name="description"
										onChange={handlerChange}
									></textarea>
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

								<div className="mt-4">
									<button
										onClick={onSubmit}
										type="submit"
										className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
									>
										Send Enquiry
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FormProduct;
