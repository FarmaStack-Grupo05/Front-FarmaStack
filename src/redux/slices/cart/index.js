import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		totalPrice: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			let existingProduct = state.products.find(
				(product) => product.id === action.payload.id
			);

			if (existingProduct) {
				existingProduct.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload);
			}

			let count = 0;
			state.products.forEach((product) => {
				count += product.price * product.quantity;
			});

			state.totalPrice = count.toFixed(2);
		},
		deleteProduct: (state, action) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload
			);

			let count = 0;
			state.products.forEach((product) => {
				count += product.price * product.quantity;
			});

			state.totalPrice = count.toFixed(2);
		},
	},
});

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
