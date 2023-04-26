import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
	name: "users",
	initialState: {
		list: [],
	},
	reducers: {
		setUserList: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setUserList } = courseSlice.actions;

export default courseSlice.reducer;
