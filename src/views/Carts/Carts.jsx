import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts, modifyProducts } from "../../redux/slices/cart/sliceCart";
import { useAuth0 } from "@auth0/auth0-react";

export default function Cart() {
	const [open, setOpen] = useState(true);
	const cart = useSelector((state) => state.cartState);
	const { user } = useAuth0();
	const dispatch = useDispatch();

	const handleRemoveProduct = (product) => {
		dispatch(deleteProducts(user.sub, product.id));
	};

	const handleUpdateProduct = (product, quantity) => {
		dispatch(modifyProducts(user.sub, product.id, quantity));
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-lg font-medium text-gray-900">
													Shopping cart
												</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="-m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={() => setOpen(false)}
													>
														<span className="sr-only">Close panel</span>
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</button>
												</div>
											</div>

											<div className="mt-8">
												<div className="flow-root">
													<ul
														role="list"
														className="-my-6 divide-y divide-gray-200"
													>
														{cart.products.length === 0 && (
															<p className="text-center text-gray-500">
																Your cart is empty
															</p>
														)}
														{cart.products.map((product) => (
															<li key={product.id} className="flex py-6">
																<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
																	<img
																		src={product.image}
																		alt={product.name}
																		className="h-full w-full object-cover object-center"
																	/>
																</div>

																<div className="ml-4 flex flex-1 flex-col">
																	<div>
																		<div className="flex justify-between text-base font-medium text-gray-900">
																			<h3>
																				<a href={product.image}>
																					{product.name}
																				</a>
																			</h3>
																			<div className="flex flex-col items-end">
																				<p className="ml-4">${product.subtotal}</p>
																				<p className="ml-4 text-sm text-gray-500 opacity-50">
																					${product.price}/each one
																				</p>
																			</div>
																		</div>
																	</div>
																	<div className="flex flex-1 items-end justify-between text-sm">
																		<div className="flex flex-col items-start">
																			<span>
																				Qty{" "}
																			</span>
																			<select
																				className="rounded pr-8 pl-1 py-0"
																				value={product.quantity}
																				onChange={(e) => handleUpdateProduct(product, e.target.value)}
																			>
																				{[...Array(10).keys()].map((x) => (
																					<option key={x + 1} value={x + 1}>
																						{x + 1}
																					</option>
																				))}
																			</select>
																		</div>

																		<div className="flex">
																			<button
																				type="button"
																				onClick={() =>
																					handleRemoveProduct(product)
																				}
																				className="font-medium text-green-600 hover:text-green-500"
																			>
																				Remove
																			</button>
																		</div>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<p>Subtotal</p>
												<p>${cart.totalPrice}</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">
												Shipping and taxes calculated at checkout.
											</p>
											<div className="mt-6">
												<Link
													to="/farmastack/payment"
													className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
												>
													Checkout
												</Link>
											</div>
											<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
												<p>
													or{" "}
													<button
														type="button"
														className="font-medium text-green-600 hover:text-green-500"
														onClick={() => setOpen(false)}
													>
														Continue Shopping
														<span aria-hidden="true"> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
