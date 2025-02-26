
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { userTheme: "valentine" }, // Default theme
  reducers: {
    setTheme: (state, action) => {
      state.userTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
