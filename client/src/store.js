import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import data from "./reducers/data";

const store = configureStore({
  reducer: {
    auth,
    data,
  },
});

export default store;
