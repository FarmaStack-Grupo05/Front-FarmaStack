import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [msg, setMsg] = useState("");
	const [email, setEmail] = useState("");
	const [sending, setSending] = useState(false);
	const { dataBaseUser } = useSelector((state) => state.userState);
	const { user } = useAuth0();

	const resetInputs = () => {
		setName("");
		setEmail("");
		setMsg("");
	};

	const verifyInputs = () => {
		const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		const validName = name.length > 3;
		const validEmail = emailRegex.test(email);
		const validMsg = msg.length > 10;

		return validName && validEmail && validMsg;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!verifyInputs()) return Swal.fire({
			icon: "warning",
			title: "Incomplete Data",
			text: "Message +10 characters",
		});

		setSending(true);
		const templateParams = {
			from_email: email,
			subject: `check me out :D - by: ${name}`,
			message: msg,
		};
		// console.log(templateParams);

		emailjs
			.send(
				import.meta.env.VITE_EMAIL_SERVICE,
				import.meta.env.VITE_EMAIL_TEMPLATE,
				templateParams,
				import.meta.env.VITE_EMAIL_KEY
			)
			.then(() => {
				resetInputs();
				setSending(false);
				
				Swal.fire({
					icon: "success",
					title: "Completed Data",
					text: "Message Success!",
				});
			})
			.catch((e) => console.error("mistakes have ben made", e));
	};

	useEffect(() => {
		if (dataBaseUser || user) {
			setName(dataBaseUser?.name || user?.name);
			setEmail(dataBaseUser?.email || user?.email);
		}
	}, [dataBaseUser])

	return (
		<div className="flex justify-center">
			<form onSubmit={handleSubmit} className="contact w-full max-w-lg">
				<div className="mb-4 mt-8">
					<label htmlFor="name" className="block text-gray-700 font-bold mb-2">
						Name:
					</label>
					<input
						id="name"
						type="text"
						className="appearance-none border-2 border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
						onChange={(e) => setName(e.currentTarget.value)}
						value={name}
						placeholder="John Doe"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
						Email:
					</label>
					<input
						id="email"
						type="text"
						className="appearance-none border-2 border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
						onChange={(e) => setEmail(e.currentTarget.value)}
						value={email}
						placeholder="example@gmail.com"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="msg" className="block text-gray-700 font-bold mb-2">
						Message:
					</label>
					<textarea
						id="msg"
						className="appearance-none border-2 border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
						onChange={(e) => setMsg(e.currentTarget.value)}
						value={msg}
						placeholder="Enter your message here"
						rows="5"
					/>
				</div>
				<button
					className="bg-white hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded-full"
					disabled={sending}
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactMe;
