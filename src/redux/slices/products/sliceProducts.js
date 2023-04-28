import axios from "axios";
import { setProductsList } from ".";

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
//Pagination
export const changePageProduct = (page) => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${URL}/products?page=${page}`);
			console.log(res.data);
			dispatch(setProductsList(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};
