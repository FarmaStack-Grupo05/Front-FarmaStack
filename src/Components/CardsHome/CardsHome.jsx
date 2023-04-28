import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/slices/products/sliceProducts";

const CardsHome = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	const { results } = useSelector((state) => state.productsState.list);
	const limitResults = results?.slice(0, 3);
	return (
		<div>
			<ul className="grid gap-4 xl:grid-cols-2 lg:grid-cols-3">
				{limitResults?.map((product) => {
					return (
						<li>
							<Link to={`/farmastack/products`}>
								<a href="#" className="group block overflow-hidden">
									<img
										src={product.image}
										alt=""
										className="h-[250px] w-2/5 object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
									/>

									<div className="relative bg-white pt-3">
										<h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
											{product.category}
										</h3>
										<h1 className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4">
											{product.name}
										</h1>

										<p className="mt-2">
											<span className="sr-only"> Regular Price </span>
											<span className="tracking-wider text-gray-900">
												${product.price}
											</span>
										</p>
									</div>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CardsHome;
