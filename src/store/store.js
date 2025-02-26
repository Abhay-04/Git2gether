import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../store/slices/themeSlice"


const store = configureStore({
  reducer: {
    theme : themeReducer
  },
});

export default store;
