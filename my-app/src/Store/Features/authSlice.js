import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogIn: false, name: "abdelmoniem" },
  reducers: {
    islogInOut: (state) => {
      state.isLogIn = !state.isLogIn;
    },
  },
});
export default authSlice.reducer;
export const { islogInOut } = authSlice.actions;
