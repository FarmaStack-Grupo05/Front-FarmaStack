import emailjs from "emailjs-com";
import { useState } from "react";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [msg, setMsg] = useState("");
	const [email, setEmail] = useState("");
	const [sending, setSending] = useState(false);

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
		if (!verifyInputs) return window.alert("Not valid inputs");

		setSending(true);
		const templateParams = {
			from_email: email,
			subject: `check me out :D - by: ${name}`,
			message: msg,
		};
		console.log(templateParams);

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
				alert("Email sent :)");
			})
			.catch((e) => console.error("mistakes have ben made", e));
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="contact">
				<input
					id="name"
					type="text"
					onChange={(e) => setName(e.currentTarget.value)}
					value={name}
					placeholder=" "
				/>
				<label htmlFor="name">Name:</label>
				<div className="input-container">
					<input
						id="email"
						type="text"
						onChange={(e) => setEmail(e.currentTarget.value)}
						value={email}
						placeholder=" "
					/>
					<label htmlFor="email">Email:</label>
				</div>
				<div className="input-container">
					<textarea
						id="msg"
						onChange={(e) => setMsg(e.currentTarget.value)}
						value={msg}
						placeholder=" "
					/>
					<label htmlFor="msg">Message:</label>
				</div>
				<button className="neon-button" disabled={sending}>
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactMe;
