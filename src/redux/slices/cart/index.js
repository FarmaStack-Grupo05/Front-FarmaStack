import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            let existingProduct = state.products.find((product) => product.id === action.payload.id)

            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                const newProduct = {
                    ...action.payload,
                    quantity: 1
                }
                state.products.push(newProduct);
            }


            let count = 0
            state.products.forEach((product) => {
                count += product.price * product.quantity
            })

            state.totalPrice = count
        },
    },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
