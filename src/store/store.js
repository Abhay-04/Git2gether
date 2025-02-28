import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../store/slices/themeSlice";
import userReducer from "../store/slices/userSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export default store;
