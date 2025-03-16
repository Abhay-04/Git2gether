import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removefeed: () => {
      return [];
    },
    removeFeedById: (state, action) => {
      return state.filter((feed) => feed._id !== action.payload);
    },
  },
});

export const { addFeed, removefeed, removeFeedById } = feedSlice.actions;

export default feedSlice.reducer;
