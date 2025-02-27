// src/components/ThemeSwitcher.jsx

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/themeSlice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.theme.userTheme);

  const themes = [
    "valentine",
    "dark",
    "light",
    "cupcake",
    "retro",
    "dracula",
    "lemonade",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "cyberpunk",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedTheme.toUpperCase()}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl max-h-96 overflow-y-auto"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.toUpperCase()}
              value={theme}
              checked={selectedTheme === theme}
              onChange={() => dispatch(setTheme(theme))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
