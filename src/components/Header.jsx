import React from "react";
import Moon from "./icons/Moon";
import "./styles/Header.css";

const Header = ({ toggleDarkMode }) => {
  return (
    <header>
      <nav className="Header p-3">
        <h2 className="Header__logo">
          <strong>Where in the world?</strong>
        </h2>
        {/* <button className="Header__dark-mode-button" onClick={toggleDarkMode} id="dark-mode-btn">
          <Moon size={21}/> <span className="ps-2">Dark Mode</span>
        </button> */}
      </nav>
    </header>
  )
}

export default Header;