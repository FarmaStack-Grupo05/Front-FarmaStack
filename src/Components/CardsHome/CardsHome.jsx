import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/slices/products/sliceProducts";

const CardsHome = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);
	const { allProducts } = useSelector((state) => state.productsState);
	const limitResults = allProducts?.slice(0, 8);

	return (
		<div>
			<div className="flex justify-center mb-4">
				<Link
					to="/farmastack/products"
					className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full"
				>
					Products
				</Link>
			</div>
			<div className="w-4/5 mx-auto grid grid-cols-2 rounded-3xl md:grid-cols-4 gap-6 shadow-xl p-10 text-gray-700 hover:text-white">
				{limitResults?.map((product) => {
					return (
						<div
							key={product.name}
							className="text-gray-700 hover:text-white relative bg-white p-3 rounded-3xl shadow-md transition duration-300 hover:bg-green-500 group-hover:text-white hover:transform hover:scale-105"
						>
							<li key={product.name} className="no-underline list-none rounded-3xl">
								<Link
									to={`/farmastack/details/${product.id}`}
									className="bg-white no-underline text-decoration-none group block overflow-hidden border border-slate-200 rounded-3xl"
								>
									<img
										src={product.image}
										alt=""
										className="no-underline border-none mx-auto h-auto w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] rounded-md"
									/>
								</Link>

								<div className="group block overflow-hidden no-underline text-decoration-none">
									<p className="group block text-xl text-center font-semibold no-underline">
										{product.name}
									</p>

									<p className="group block text-xs mt-1">{product.category}</p>

									<p className="mt-2">
										<span className="sr-only">Regular Price</span>
										<span className="block no-underline tracking-wider">
											${product.price}
										</span>
									</p>
								</div>
							</li>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CardsHome;
