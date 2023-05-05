import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0,
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload;

            let count = 0
            state.products.forEach((product)=>{
                count += product.price 
            })

            state.totalPrice = count
        },
    },
});

export const { addProducts } = cartSlice.actions;

export default cartSlice.reducer;
