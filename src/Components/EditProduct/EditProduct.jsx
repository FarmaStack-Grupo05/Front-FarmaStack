import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../redux/slices/products/sliceProducts";
import { API_URL } from "../../utils/api";

const EditProduct = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [inputs, setInputs] = useState({
		name: "",
		price: 0,
		category: "",
		description: "",
		image: "",
		stock: 0,
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
				await axios.put(`${API_URL}/products/edit/${id}`, inputs);
				Swal.fire({
					icon: "success",
					title: "Great !",
					text: `Se edito el producto ${id}`,
				});
				navigate("/dashboard/products");
			} catch (error) {
				console.log(error);
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
	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch]);
	const { detail } = useSelector((state) => state.productsState);
	console.log(inputs);
	return (
		<div className="flex">
			<section className="bg-gray-100 w-2/3">
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
								className="inline-flex px-5 py-3 text-white bg-green-500 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3"
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</section>
			<section className="flex-grow-0 flex-shrink-0 w-1/3 bg-gray-100 ml-6">
				<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
					<h1>Name : {detail.name}</h1>
					<h1>Price : {detail.price}</h1>
					<h1>Stock : {detail.stock}</h1>
					<h1>Category : {detail.category}</h1>
					<h1>Description : {detail.description}</h1>
					<h1>Stock : {detail.stock}</h1>
					<div className="whitespace-nowrap px-4 py-4 w-1/2">
						<img src={detail.image} alt={detail.name} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default EditProduct;
