import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "products",
	initialState: {
		list: [],
		detail: {},
		cartProduct: [],
		amount: 0,
		allProducts: [],
	},
	reducers: {
		setProductsList: (state, action) => {
			state.list = action.payload;
		},
		setAllProducts: (state, action) => {
			state.allProducts = action.payload;
		},
		setProductCart: (state, action) => {
			state.cartProduct = action.payload;
			state.amount++;
		},
		getIdProducts: (state, action) => {
			state.detail = action.payload;
		},
		addToCart: (state, action) => {
			if (Array.isArray(state.cartProduct)) {
				state.cartProduct.push(action.payload); // añadir un producto al carrito
			}
		},
		removeFromCart: (state, action) => {
			state.cartProduct = state.cartProduct.filter(
				(cart) => cart.id !== action.payload.id
			); // remover un producto del carrito
		},
	},
});

export const {
	setProductsList,
	getIdProducts,
	setProductCart,
	addToCart,
	removeFromCart,
	setAllProducts,
} = productSlice.actions;

export default productSlice.reducer;
