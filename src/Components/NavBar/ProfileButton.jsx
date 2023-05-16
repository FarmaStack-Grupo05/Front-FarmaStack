import emma from "../../assets/emma.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

function ProfileButton() {
	const [isOpen, setIsOpen] = useState(false);
	const { user, isAuthenticated } = useAuth0();

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const { dataBaseUser } = useSelector((state) => state.userState);

	return (
		<>
			<button
				id="avatarButton"
				type="button"
				data-dropdown-toggle="userDropdown"
				data-dropdown-placement="bottom-start"
				className="w-10 h-10 rounded-full cursor-pointer"
				onClick={toggleDropdown}
			>
				{isAuthenticated ? (
					<img
						src={user?.picture || emma}
						alt="User dropdown"
						className="w-10 h-10 rounded-full"
					/>
				) : (
					<UserCircleIcon className="text-white" />
				)}
			</button>

			{/* <!-- Dropdown menu --> */}
			<div
				id="userDropdown"
				className={`z-10 ${
					isOpen ? "" : "hidden"
				} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-green-700 dark:divide-green-60`}
				onMouseLeave={() => setIsOpen(false)}
			>
				<div className="px-4 py-3 text-sm text-green-900 dark:text-white">
					<div>{user?.name || "Guest"}</div>
					<div className="font-medium truncate">{user?.email}</div>
				</div>
				<ul
					className="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="avatarButton"
				>
					{isAuthenticated ? (
						<>
							{" "}
							{dataBaseUser?.rol === "admin" && (
								<li>
									<Link
										to={"/dashboard"}
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Dashboard
									</Link>
								</li>
							)}
							<li>
								<Link
									to="/farmastack/profile"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Profile
								</Link>
							</li>
							<li>
								<Link
									to="/farmastack/purchases"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Purchases
								</Link>
							</li>
						</>
					) : (
						<>
							<li>
								<a
									href=""
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<LoginButton />
								</a>
							</li>
							<li>
								<a
									href="/farmastack/registrarse"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Sign in
								</a>
							</li>
						</>
					)}
				</ul>
				{isAuthenticated && (
					<div className="py-1">
						<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
							<LogoutButton />
						</a>
					</div>
				)}
			</div>
		</>
	);
}

export default ProfileButton;
