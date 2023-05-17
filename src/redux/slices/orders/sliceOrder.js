import { API_URL } from "../../../utils/api";
import { setOrdersList } from ".";
import axios from "axios";

const getOrders = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`${API_URL}/order`);
			dispatch(setOrdersList(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export default getOrders;
