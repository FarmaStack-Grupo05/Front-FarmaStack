import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
	name: "orders",
	initialState: {
		orderList: [],
	},
	reducers: {
		setOrdersList: (state, action) => {
			state.orderList = action.payload;
		},
	},
});

export const { setOrdersList } = orderSlice.actions;

export default orderSlice.reducer;
