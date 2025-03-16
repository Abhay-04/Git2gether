import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: () => {
      return null;
    },
    removeRequestById: (state, action) => {
      return state.filter((request) => request._id !== action.payload);
    },
  },
});

export const { addRequest, removeRequest, removeRequestById } =
  requestSlice.actions;

export default requestSlice.reducer;
