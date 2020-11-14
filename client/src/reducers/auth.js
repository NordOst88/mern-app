import { createSlice } from "@reduxjs/toolkit";
import { AUTH_INIT_STATE } from "../constants/constants";

const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_INIT_STATE,
  reducers: {
    setAuth: (_, action) => action.payload,
    resetAuth: () => AUTH_INIT_STATE,
  },
});

export const { setAuth, resetAuth } = authSlice.actions;

export const selectIsAuth = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
