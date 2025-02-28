import { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useSelector((state) => state.theme.userTheme);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div>
      <div className="navbar bg-base-100 pb-6 sm:px-6 ">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-sm sm:text-xl font-bold">Git2gether</Link>
        </div>
        
        <div className="flex-none gap-2">
        <div className="min-w-max  ">
          <ThemeSwitcher />
        </div>
       
          
          {user && <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {"Hi, " + user.firstName}
                  
                </a>
              </li>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link >Settings</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
