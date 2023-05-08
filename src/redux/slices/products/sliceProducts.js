import axios from "axios";
import {
	setProductsList,
	getIdProducts,
	setProductCart,
	setAllProducts,
} from ".";

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

export const getAllProducts = () => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`http://localhost:3001/products?page=all`);
			dispatch(setAllProducts(res.data));
		} catch (err) {
			console.log("error", err.message);
		}
	};
};

export const getProductById = (id) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`http://localhost:3001/products/${id}`);
			dispatch(getIdProducts(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchProducts = (name) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${URL}/products?name=${name}`);
			dispatch(setProductsList(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};
export const filterProduct = ({ sortName, sortPrice, category, page }) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`http://localhost:3001/products`, {
				params: {
					sortName: sortName,
					sortPrice: sortPrice,
					category: category,
					page: page,
				},
			});
			dispatch(setProductsList(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};
export const setProduct = (product) => {
	// console.log(product)
	return (dispatch) => {
		// 	try {
		// 		let res = await axios.get(`${URL}/products?category=${category}`);
		// 		dispatch(setProductsList(res.data));
		// 		console.log(res.data);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		dispatch(setProductCart(product));
	};
};
