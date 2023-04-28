/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageProduct } from "../../redux/slices/products/sliceProducts";

const Pagination = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(changePageProduct(page));
	}, [dispatch, page]);

	const { results } = useSelector((state) => state.productsState.list);
	const { next } = useSelector((state) => state.productsState.list);
	const { previous } = useSelector((state) => state.productsState.list);

	const handleChangePrev = (e, p) => {
		if (previous) {
			setPage(p);
		}
	};
	const handleChangeNext = (e, p) => {
		if (next) {
			setPage(p);
		}
	};

	console.log(results);
	return (
		<div>
			<div className="inline-flex items-center justify-center gap-3">
				<a
					href="#"
					className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 rtl:rotate-180"
					onClick={(e) => handleChangePrev(e, page - 1)}
				>
					<span className="sr-only">Next Page</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
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

				<p className="text-xs">
					{page}
					<span className="mx-0.25">/</span>6
				</p>

				<a
					href="#"
					className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 rtl:rotate-180"
					onClick={(e) => handleChangeNext(e, page + 1)}
				>
					<span className="sr-only">Next Page</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
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
	);
};

export default Pagination;
