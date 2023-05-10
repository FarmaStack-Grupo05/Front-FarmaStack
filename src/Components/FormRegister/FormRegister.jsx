import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

const FormRegister = () => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
		rol: "user",
		active: true,
	});

	const { user } = useSelector((state) => state.userState);
	const handlerChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const { name, email, address, phone } = inputs;
		if (![name, email, address, phone].every(Boolean)) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Completa los datos",
			});
		} else {
			try {
				await axios.post("http://localhost:3001/user", inputs);
				Swal.fire({
					icon: "success",
					title: "Great !",
					text: "Registro exitoso",
				});
				navigate("/farmastack/payment");
			} catch (error) {
				console.log(inputs);
			}
		}
	};

	return (
		<div className=" shadow col-span-3 md:col-span-2 px-2 md:px-4 py-4">
			<h1 className="text-2xl font-bold">
				Completa los datos para continuar con el pago:
			</h1>
			<form action="submit">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-5">
					<div>
						<label className="sr-only" htmlFor="email">
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
							type="email"
							id="email"
							name="email"
							onChange={handlerChange}
							defaultValue={user.email}
						/>
					</div>
					<div>
						<label className="sr-only" htmlFor="email">
							Address
						</label>
						<input
							className="w-full rounded-lg border-gray-200 p-3 text-sm"
							placeholder="Address"
							type="text"
							id="address"
							name="address"
							onChange={handlerChange}
						/>
					</div>
					<div>
						<label className="sr-only" htmlFor="email">
							Phone
						</label>
						<input
							className="w-full rounded-lg border-gray-200 p-3 text-sm"
							placeholder="Phone"
							type="text"
							id="phone"
							name="phone"
							onChange={handlerChange}
						/>
					</div>
				</div>

				<div className="mt-4 text-center">
					<button
						onClick={onSubmit}
						type="submit"
						className="px-5 py-3 text-white bg-green-500 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3 w-2/5"
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormRegister;
