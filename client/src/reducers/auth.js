import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setAuth: (_, action) => action.payload,
    resetAuth: () => {},
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

export const selectData = (state) => state.auth;

export default authSlice.reducer;
