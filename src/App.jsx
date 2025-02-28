import { Outlet, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL_DEV, BASE_URL_PROD } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/slices/userSlice";

function App() {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await axios.get(`${BASE_URL_PROD}/profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(user.data.user));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
