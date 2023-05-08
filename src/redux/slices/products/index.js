import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "products",
	initialState: {
		list: [],
		detail: {},
		cartProduct: [],
		productsHome: [],
	},
	reducers: {
		setProductsList: (state, action) => {
			state.list = action.payload;
		},
		setProductCart: (state, action) => {
			state.cartProduct = action.payload;
		},
		getIdProducts: (state, action) => {
			state.detail = action.payload;
		},
		setProductsHome: (state, action) => {
			state.productsHome = action.payload;
		},
	},
});

export const {
	setProductsList,
	getIdProducts,
	setProductCart,
	setProductsHome,
} = productSlice.actions;

export default productSlice.reducer;
