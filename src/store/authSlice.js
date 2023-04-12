import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    logIn(state) {
      return true;
    },
    logOut(state) {
      return false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
