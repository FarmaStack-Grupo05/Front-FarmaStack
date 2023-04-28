import axios from "axios";
import { setProductsList,getIdProducts  } from ".";

const URL = "http://localhost:3001";
// "http://localhost:3001";
//Get All Courses import.meta.env.VITE_BACK_URL ||

export const getProducts = () => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${URL}/products`);
			dispatch(setProductsList(res.data));
		} catch (err) {
			console.log("error", err.message);
		}
	};
};

export const getId = (id) => {
	return async (dispatch) => {
		let res = await axios.get(`${URL}/products/${id}`)
		dispatch(getIdProducts (res.data));
	}
}
