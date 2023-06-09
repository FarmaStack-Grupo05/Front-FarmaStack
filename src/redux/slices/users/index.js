import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "users",
	initialState: {
		list: [],
		user: {},
		dataBaseUser: null,
		isLoadingDbUser: true,
	},
	reducers: {
		setUserList: (state, action) => {
			state.list = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setDbUser: (state, action) => {
			state.dataBaseUser = action.payload;
			state.isLoadingDbUser = false;
		},
	},
});

export const { setUserList, setUser, setDbUser } = userSlice.actions;

export default userSlice.reducer;
