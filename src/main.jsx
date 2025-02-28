import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";
import Error from "./components/Error.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<App />}>
      <Route path="/" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
