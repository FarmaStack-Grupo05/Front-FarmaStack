import Logo from "../../assets/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Cart } from "../../views";
import ProfileButton from "./ProfileButton";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
	const [showCart, setShowCart] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const location = useLocation();
	const { products } = useSelector((state) => state.cartState);

	if (location.pathname.startsWith("/dashboard")) {
		return null;
	}

	return (
		<>
			<header aria-label="Site Header" className="border-b border-gray-100">
				<div className="flex items-center justify-between px-4 py-2 bg-green-500">
					<div className="flex items-center gap-4">
						<Link to={"/"} className="flex">
							<img
								src={Logo}
								alt="Logo"
								className="pl-20 h-16 w-30 object-contain"
							/>
						</Link>
						<button
							type="button"
							className="lg:hidden bg-green-500 text-white py-2 px-0 rounded"
							onClick={() => setShowMenu(!showMenu)}
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>

					<div></div>

					<div className="flex flex-1 items-center justify-end gap-8">
						<nav
							aria-label="Site Nav"
							className={`${
								showMenu ? "block" : "hidden"
							} } lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 text-white flex-col lg:flex-row`}
						>
							{window.location.pathname !== "/" && (
								<div className="lg:w-auto w-full">
									<Link
										to="/"
										className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current  text-white"
									>
										Home
									</Link>
								</div>
							)}
							<div className="lg:w-auto w-full">
								<Link
									to="/farmastack/aboutus"
									className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current  text-white"
								>
									About Us
								</Link>
							</div>

							<div className="lg:w-auto w-full">
								<Link
									className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
									to={"/farmastack/products"}
								>
									Products
								</Link>
							</div>

							<div className="lg:w-auto w-full">
								<Link
									className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
									to={"/farmastack/contact"}
								>
									contact
								</Link>
							</div>
						</nav>

						<div className="flex items-center pr-20">
							<div className="pt-3 pl-2 pr-2 h-16 place-content-center border-x border-gray-100">
								<ProfileButton />
							</div>

							<div className="flex items-center border-x border-gray-100">
								<span className="border-e border-e-gray-100">
									<button
										onClick={() => setShowCart(!showCart)}
										className="relative grid h-16 w-16  place-content-center border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
									>
										<span className="sr-only">Shopping</span>
										{products.length >= 1 && (
											<>
												<span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
												<span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
											</>
										)}

										<ShoppingCartIcon className="w-8 h-8 text-white" />
										{showCart && <Cart />}
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavBar;
