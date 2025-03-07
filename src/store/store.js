import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../store/slices/themeSlice";
import userReducer from "../store/slices/userSlice";
import feedReducer from "../store/slices/feedSlice";
import connectionReducer from "../store/slices/connectionsSlice";
import requestsReducer from "../store/slices/requestSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestsReducer,
  },
});

export default store;
