import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import { useLocation, Route, Routes } from "react-router-dom";
import FormProduct from "../../Components/FormProduct/FormProduct";
import fotoProfile from "../../assets/emma.jpg";
import TableUsers from "../../Components/TableUsers/TableUsers";
import TableProducts from "../../Components/TableProducts/TableProducts";
import TableOrders from "../../Components/TableOrders/TableOrders";
import Stadictis from "../../Components/Stadictis/Stadictis";
import EditProduct from "../../Components/EditProduct/EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/slices/products/sliceProducts";
import { getAllUsers } from "../../redux/slices/users/sliceUsers";

const Dashboard = () => {
	const location = useLocation();
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts(true));
		dispatch(getAllUsers());
	}, [dispatch]);

	const { user } = useSelector((state) => state.userState);

	return (
		<div className="flex bg-gray-100 min-h-screen">
			<aside className="hidden sm:flex sm:flex-col">
				<Link
					to={"/"}
					className="inline-flex items-center justify-center h-20 w-20 bg-green-500 hover:bg-green-300 focus:bg-green-300"
				>
					<svg fill="none" viewBox="0 0 66 66">
						<title>Company logo</title>
						<image href={Logo} width="60" height="60" />
					</svg>
				</Link>
				<div className="flex-grow flex flex-col justify-between text-green-500 bg-green-600">
					<div className="flex flex-col mx-4 my-6 space-y-4">
						<Link
							to={"/dashboard/users"}
							className="inline-flex items-center justify-center py-3 hover:text-green-400 hover:bg-green-700 focus:text-green-400 focus:bg-green-200 rounded-lg"
						>
							<span className="sr-only">Users</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
								/>
							</svg>
						</Link>
						<Link
							to={"/dashboard/products"}
							className="inline-flex items-center justify-center py-3 hover:text-green-400 hover:bg-green-700 focus:text-green-400 focus:bg-green-200 rounded-lg"
						>
							<span className="sr-only">Products</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
								/>
							</svg>
						</Link>
						<Link
							to={"/dashboard/orders"}
							className="inline-flex items-center justify-center py-3 hover:text-green-400 hover:bg-green-700 focus:text-green-400 focus:bg-green-200 rounded-lg"
						>
							<span className="sr-only">Orders</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</aside>
			<div className="flex-grow text-green-800">
				<header className="flex items-center h-20 px-6 sm:px-10 bg-white">
					<button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-green-600 hover:bg-green-100 hover:text-green-800 focus:bg-green-100 focus:text-green-800 rounded-full">
						<span className="sr-only">Menu</span>
						<svg
							aria-hidden="true"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</button>

					<div className="flex flex-shrink-0 items-center ml-auto">
						<button className="inline-flex items-center p-2 hover:bg-green-100 focus:bg-green-100 rounded-lg">
							<span className="sr-only">User Menu</span>
							<div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
								<span className="font-semibold">Admin : {user.nickname}</span>
								<span className="text-sm text-gray-600">{user.name}</span>
							</div>
							<span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-green-100 rounded-full overflow-hidden">
								<img
									src={user.picture}
									alt="user profile photo"
									className="h-full w-full object-cover"
								/>
							</span>
						</button>
						<div className="border-l pl-3 ml-3 space-x-1">
							{/* <button className="relative p-2 text-green-400 hover:bg-green-100 hover:text-green-600 focus:bg-green-100 focus:text-green-600 rounded-full">
								<span className="sr-only">Notifications</span>
								<span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
								<span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button> */}
							<Link to={"/"}>
								<button className="relative p-2 text-green-400 hover:bg-green-100 hover:text-green-600 focus:bg-green-100 focus:text-green-600 rounded-full">
									<span className="sr-only">Log out</span>
									<svg
										aria-hidden="true"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
								</button>
							</Link>
						</div>
					</div>
				</header>

				<main className="p-6 sm:p-10 space-y-6">
					<section>
						<Stadictis />
					</section>
					<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
						<div className="mr-6">
							<h1 className="text-4xl font-semibold mb-2">
								Administration
								{location.pathname === "/dashboard/products"
									? " Products"
									: location.pathname === `/dashboard/users`
									? " Users"
									: location.pathname === `/dashboard/orders`
									? " Orders"
									: location.pathname === `/dashboard/addProduct`
									? " Create"
									: null}
							</h1>
						</div>
						<div className="flex flex-wrap items-start justify-end -mb-3">
							<Link
								to={"/dashboard/addProduct"}
								className="inline-flex px-5 py-3 text-white bg-green-500 hover:bg-green-700 focus:bg-green-700 rounded-md ml-6 mb-3"
							>
								<svg
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
								Create new product
							</Link>
						</div>
					</div>

					<section>
						{location.pathname === "/dashboard/products" ? (
							<TableProducts />
						) : location.pathname === `/dashboard/editProduct/${id}` ? (
							<EditProduct />
						) : location.pathname === `/dashboard/addProduct` ? (
							<FormProduct />
						) : location.pathname === `/dashboard/users` ? (
							<TableUsers />
						) : location.pathname === `/dashboard/orders` ? (
							<TableOrders />
						) : null}
					</section>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
