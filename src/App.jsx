import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className=" min-h-[100vh] ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
