import axios from "axios";
import { setProductsList, getIdProducts, setProductCart } from ".";

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

export const getProducts = (value, text) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${URL}/products?${value}=${text}`);
			dispatch(setProductsList(res.data));
		} catch (err) {
			console.log("error", err.message);
		}
	};
};

export const getId = (id) => {
	return async (dispatch) => {
		let res = await axios.get(`${URL}/products/${id}`);
		dispatch(getIdProducts(res.data));
	};
};
//Pagination
export const changePageProduct = (page) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${URL}/products?page=${page}`);
			dispatch(setProductsList(res.data));
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
export const filterProduct = ({ sortName, sortPrice, category }) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(
				`http://localhost:3001/products?sortName=${sortName}&sortPrice=${sortPrice}&category=${category}`
			);
			dispatch(setProductsList(res.data));
			console.log(res.data);
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
