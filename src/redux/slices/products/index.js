import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "products",
	initialState: {
		list: [],
		detail: {},
		cartProduct:[],
	},
	reducers: {
		setProductsList: (state, action) => {
			state.list = action.payload;
		},
		setProductCart: (state, action) => {
			state.cartProduct = action.payload;
		},
		getIdProducts:(state,action) => {
			state.detail = action.payload
		}
	},
});

export const { setProductsList, getIdProducts, setProductCart } = productSlice.actions;

export default productSlice.reducer;
