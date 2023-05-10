import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "users",
	initialState: {
		list: [],
		user: {}
	},
	reducers: {
		setUserList: (state, action) => {
			state.list = action.payload;
		},
		setUser: (state, action) =>{
			state.user = action.payload;
		}
	},
});

export const { setUserList, setUser} = userSlice.actions;

export default userSlice.reducer;
