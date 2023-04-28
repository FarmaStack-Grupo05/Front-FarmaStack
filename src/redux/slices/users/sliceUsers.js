import axios from "axios";
import { setUserList } from ".";

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

export const getAllUsers = () => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${URL}/course/?page=all`);
			dispatch(setUserList(res.data));
		} catch (err) {
			console.log("error", err.message);
		}
	};
};
