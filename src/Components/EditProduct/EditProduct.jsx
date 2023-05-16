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
		if (detail.image) {
			setInputs({
				...inputs,
				image: detail.image,
			});
		}
	};

	const validateInputs = () => {
		const { name, price, category, description, image } = inputs;
		if (![name, price, category, description, image].every(Boolean)) {
			Swal.fire("Incomplete data");
			return false;
		} else {
			return true;
		}
	};

	const update = async () => {
		try {
			await axios.put(`${API_URL}/products/edit/${id}`, inputs);
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		if (validateInputs()) {
			Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, edit it!",
			}).then((result) => {
				if (result.isConfirmed) {
					update();
					Swal.fire("Done!", "Your product has been updated.", "success");
					navigate("/dashboard/products");
				}
			});
		} else {
			console.log("falta");
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

	useEffect(() => {
		if (detail) {
			setInputs({
				name: detail.name,
				price: detail.price,
				category: detail.category,
				description: detail.description,
				stock: detail.stock,
				image: detail.image,
			});
		}
	}, [detail]);

	return (
		<div>
			<section className="bg-gray-100">
				<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
					<form action="" className="space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="name">Name</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									placeholder="Name"
									type="text"
									id="name"
									name="name"
									onChange={handlerChange}
									value={inputs.name}
								/>
							</div>
							<div>
								<label htmlFor="email">Price</label>
								<input
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									placeholder="Price"
									type="number"
									id="price"
									name="price"
									onChange={handlerChange}
									value={inputs.price}
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label htmlFor="email">Stock current : {detail.stock}</label>
								<select
									id="select"
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									name="stock"
									onChange={handlerChange}
									value={inputs.stock}
								>
									<option value="" defaultChecked disabled>
										-- Stock --
									</option>
									<option value="0">Out of stock</option>
									{options}
								</select>
							</div>

							<div>
								<label htmlFor="phone">Category</label>
								<select
									id="select"
									className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
									name="category"
									onChange={handlerChange}
									value={inputs.category}
								>
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
							<label htmlFor="message">Description</label>

							<textarea
								className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3"
								placeholder="Description"
								rows="2"
								id="description"
								name="description"
								onChange={handlerChange}
								value={inputs.description}
							></textarea>
						</div>
						<div className="flex">
							<div className="ml-40">
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
										{detail.image && (
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
	);
};

export default EditProduct;
