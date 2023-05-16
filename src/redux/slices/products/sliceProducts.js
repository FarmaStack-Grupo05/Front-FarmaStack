import axios from "axios";
import {
	setProductsList,
	getIdProducts,
	setProductCart,
	addToCart,
	removeFromCart,
	setAllProducts,
} from ".";
import { API_URL } from "../../../utils/api";

export const getAllProducts = (withNoStock = false) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${API_URL}/products`, {
				params: {
					withNoStock,
					page: "all",
				},
			});
			console.log(res.data);
			dispatch(setAllProducts(res.data));
		} catch (err) {
			console.log("error", err.message);
		}
	};
};

export const getProductById = (id) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${API_URL}/products/${id}`);
			dispatch(getIdProducts(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchProducts = (name) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${API_URL}/products?name=${name}`);
			dispatch(setProductsList(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const filterProduct = ({ sortName, sortPrice, category, page }) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${API_URL}/products`, {
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
		// 		let res = await axios.get(`${API_URL}/products?category=${category}`);
		// 		dispatch(setProductsList(res.data));
		// 		console.log(res.data);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		dispatch(setProductCart(product));
	};
};
