import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterProduct } from "../../redux/slices/products/sliceProducts";

const Products = () => {
	const dispatch = useDispatch();

	const [filters, setFilters] = useState({
		sortName: "default",
		sortPrice: "default",
		category: "default",
		page: 1,
	});

	const handlerChange = (event) => {
		event.preventDefault();
		const { value, name } = event.target;
		setFilters({
			...filters,
			[name]: value,
			page: 1,
		});
	};

	const { results } = useSelector((state) => state.productsState.list);
	const { next } = useSelector((state) => state.productsState.list);
	const { previous } = useSelector((state) => state.productsState.list);

	const handleChangePrev = (e) => {
		e.preventDefault();
		if (previous) {
			setFilters({
				...filters,
				page: filters.page - 1,
			});
		}
	};

	const handleChangeNext = (e) => {
		e.preventDefault();
		if (next)
			setFilters({
				...filters,
				page: filters.page + 1,
			});
	};
	useEffect(() => {
		dispatch(filterProduct(filters));
	}, [dispatch, filters]);

	return (
		<div>
			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  text-center">
					<header>
						<h2 className="text-xl font-bold text-green-900 sm:text-3xl pl-5">
							Product Collection
						</h2>
						<div className="w-16 h-1 mt-2 bg-yellow-400 mx-auto"></div>
						<p className="mt-4 w-auto text-green-500 shadow-xl p-5 rounded-3xl">
							Welcome to our pharmaceuticals page. here You will find a wide
							variety of medicines and products high-quality and reliable
							healthcare, designed to help improve their well-being and quality
							of life.
						</p>
					</header>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							paddingTop: 30,
						}}
					>
						<div className="flex justify-center items-center gap-3 text-gray-500">
							<a
								className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-green-500 hover:text-white"
								onClick={handleChangePrev}
							>
								<span className="sr-only">Prev Page</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</a>

							<p className="text-sm font-medium">Page {filters.page} of 6</p>

							<a
								className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-green-500 hover:text-white"
								onClick={handleChangeNext}
							>
								<span className="sr-only">Next Page</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div className="mt-8 block lg:hidden">
						<button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
							<span className="text-sm font-medium"> Filters & Sorting </span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-4 w-4 rtl:rotate-180"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>

					<div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
						<div className="hidden space-y-4 lg:block shadow-xl h-full p-5 rounded-3xl">
							<div>
								<label
									htmlFor="SortBy"
									className="block text-xl font-medium text-green-700"
								>
									Sort By Name
								</label>

								<select
									id="SortBy"
									className="w-full mt-1 rounded border-green-300 text-green-700 text-sm font-medium"
									onChange={handlerChange}
									name="sortName"
								>
									<option value={"default"}>-- all --</option>
									<option value="asc">ASC</option>
									<option value="des">DES</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="SortBy"
									className="block text-xl font-medium text-green-700"
								>
									Sort By Price
								</label>

								<select
									id="SortBy"
									className="w-full mt-1 rounded border-green-300 text-green-700 text-sm font-medium"
									onChange={handlerChange}
									name="sortPrice"
								>
									<option value={"default"}>-- all -</option>
									<option value="asc">ACS</option>
									<option value="des">DES</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="SortBy"
									className="block text-xl font-medium text-green-700"
								>
									Filters for category
								</label>

								<select
									id="SortBy"
									className="w-full mt-1 rounded border-green-300 text-green-700 text-sm font-medium"
									onChange={handlerChange}
									name="category"
								>
									<option value={"default"}>-- all -</option>
									<option value="medicines">Medicines</option>
									<option value="Sexual health">Sexual health</option>
									<option value="Personal care">Personal care</option>
									<option value="Maternity">Maternity</option>
								</select>
							</div>
						</div>

						<div className="no-underline text-decoration-none lg:col-span-3 shadow-xl h-full p-5 rounded-3xl">
							<ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 text-decoration-none">
								{results?.map((product) => {
									return (
										<li
											key={product.name}
											className="card no-underline text-decoration-none bg-white shadow-xl h-full p-5 rounded-3xl transition duration-500 hover:bg-green-500 hover:text-white group-hover:text-white hover:transform hover:scale-105"
										>
											<Link
												to={`/farmastack/details/${product.id}`}
												className="group block overflow-hidden"
											>
												<div className="card rounded-xl relative bg-white mb-3">
													<img
														src={product.image}
														alt=""
														className="h-auto w-auto mx-auto p-3 object-cover transition duration-500 group-hover:scale-105 sm:h-[120px]"
													/>
												</div>

												<div className="flex flex-row cursor-pointer items-center justify-between">
													<div className="duration-500 hover:text-white group-hover:text-white">
														<h1 className="text-xl text-gray-700 group-hover:text-white">
															{product.name}
														</h1>

														<h3 className="text-xs text-gray-700 group-hover:text-white">
															{product.category}
														</h3>

														<p className="mt-2">
															<span className="sr-only"> Regular Price </span>
															<span className="tracking-wider text-gray-900 group-hover:text-white">
																${product.price}
															</span>
														</p>
													</div>
													<div>
														<button
															// onClick={handlerProduct}
															className="block w-auto rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
														>
															Add to cart
														</button>
													</div>
												</div>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Products;
