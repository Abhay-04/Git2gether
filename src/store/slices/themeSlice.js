import { createSlice } from "@reduxjs/toolkit";

// Get the theme from localStorage or default
const initialTheme = localStorage.getItem("theme") || "wireframe";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    userTheme: initialTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      state.userTheme = action.payload;
      localStorage.setItem("theme", action.payload); // Persist theme
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
