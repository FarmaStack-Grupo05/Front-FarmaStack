import { configureStore } from "@reduxjs/toolkit";
import users from "../slices/users";
import products from "../slices/products";
import cart from "../slices/cart";
import orders from "../slices/orders";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

export const rootReducer = combineReducers({
	userState: users,
	productsState: products,
	cartState: cart,
	orderState: orders,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export default store;
