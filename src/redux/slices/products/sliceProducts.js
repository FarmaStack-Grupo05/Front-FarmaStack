import axios from "axios";
import { setProductsList } from ".";

const URL = "http://localhost:3001";
// "http://localhost:3001";
//Get All Courses import.meta.env.VITE_BACK_URL ||

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
