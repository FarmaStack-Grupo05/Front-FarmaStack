import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataBaseUser } from "../../redux/slices/users/sliceUsers";
import { API_URL } from "../../utils/api";

const FormRegister = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [inputs, setInputs] = useState({
		name: "",
		address: "",
		phone: "",
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
		const { name, address, phone } = inputs;
		if (![name, address, phone].every(Boolean) || !user.email) {
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: "Completa los datos",
			});
		} else {
			try {
				await axios.post(`${API_URL}/user`, {
					...inputs,
					rol: "user",
					active: true,
					email: user.email,
				});
				dispatch(getDataBaseUser(user.email));
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
		<div className="flex justify-center py-4">
			<div className="max-w-2xl shadow col-span-3 md:col-span-2 px-2 md:px-4 py-4">
				<h1 className="text-2xl font-bold">
					Complete your profile to continue with the payment:
				</h1>
				<p className="text-sm text-gray-500">
					We need to know your name, address and phone number to continue with
					the payment. Email field is disabled because we use the email you used
					to login.
				</p>
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
								className="w-full rounded-lg border-gray-200 p-3 text-sm disabled:opacity-60"
								placeholder="Email"
								type="email"
								id="email"
								name="email"
								defaultValue={user.email}
								disabled
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
		</div>
	);
};

export default FormRegister;
