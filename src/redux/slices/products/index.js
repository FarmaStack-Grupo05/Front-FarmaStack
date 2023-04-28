import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "products",
	initialState: {
		list: [],
		detail: {}
	},
	reducers: {
		setProductsList: (state, action) => {
			state.list = action.payload;
		},
		getIdProducts:(state,action) => {
			state.detail = action.payload
		}
	},
});

export const { setProductsList, getIdProducts } = productSlice.actions;

export default productSlice.reducer;
