import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: false, userData: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //while login change the status true and userdata as the data user get login with
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    //while logout change the status as flase and userdata as null
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
