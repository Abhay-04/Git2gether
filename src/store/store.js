import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../store/slices/themeSlice";
import userReducer from "../store/slices/userSlice";
import feedReducer from "../store/slices/feedSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    feed: feedReducer,
  },
});

export default store;
