import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { API_URL } from "../../utils/api";

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
				`${API_URL}/products/upload`,
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
				await axios.post(`${API_URL}/products`, inputs);
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
	const options = Array.from({ length: 50 }, (_, index) => index + 1).map(
		(number) => (
			<option key={number} value={number}>
				{number}
			</option>
		)
	);
	return (
		<div>
			<section className="bg-gray-100">
				<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
					<form action="" className="space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label className="sr-only" htmlFor="email">
									Stock
								</label>
								<select
									id="select"
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									name="stock"
									onChange={handlerChange}
								>
									<option value="">-- Stock --</option>
									{options}
								</select>
							</div>

							<div>
								<label className="sr-only" htmlFor="phone">
									Category
								</label>
								<select
									id="select"
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									name="category"
									onChange={handlerChange}
								>
									<option value="">-- Category --</option>
									{[
										"Medicines",
										"Maternity",
										"Sexual health",
										"Personal care",
									].map((categ, index) => {
										return (
											<option key={index} value={categ}>
												{categ}
											</option>
										);
									})}
								</select>
							</div>
						</div>

						<div>
							<label className="sr-only" htmlFor="message">
								Description
							</label>

							<textarea
								className="w-full rounded-lg border-gray-200 p-3 text-sm"
								placeholder="Description"
								rows="1"
								id="description"
								name="description"
								onChange={handlerChange}
							></textarea>
						</div>
						<div className="flex">
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
							<div className="ml-24 w-1/6">
								<h1>{inputs.name}</h1>
								<img src={inputs.image} alt={inputs.name} />
							</div>
						</div>

						<div className="mt-4">
							<button
								onClick={onSubmit}
								type="submit"
								className="inline-flex px-5 py-3 text-white bg-green-500 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3"
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default FormProduct;
