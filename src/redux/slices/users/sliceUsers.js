import axios from "axios";
import { setUserList, setUser, setDbUser } from ".";
import { API_URL } from "../../../utils/api";

export const getAllUsers = () => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${API_URL}/user`);
			dispatch(setUserList(res.data));
		} catch (err) {
			console.log("error", err.message);
		}
	};
};

export const getUser = (user) => {
	return (dispatch) => {
		try {
			dispatch(setUser(user))
		} catch (error) {
			console.log(error)
		}
	};
};

export const getDataBaseUser = (email) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`${API_URL}/user?email=${email}`);
			const dbUser = res.data;
			dispatch(setDbUser(dbUser));
		} catch (error) {
			console.log(error);
		}
	};
};
