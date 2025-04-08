import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

import "./index.css";
import Logo from "../../assets/Logo.svg";
import logo_dark from "../../assets/logo_dark.svg";
import light from "../../assets/light.svg";
import dark from "../../assets/dark.svg";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${theme === "dark" ? "dark-theme" : ""}`}>
      {/* Logo & Name */}
      <div className="nav-items logo-container">
        <img
          src={theme !== "dark" ? Logo : logo_dark}
          alt="Logo"
          className="logo"
        />
        <p className="name">SANJAY NARUKULLA</p>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-items menu ${isMobileMenuOpen ? "active" : ""}`}>
        {["home", "about", "resume", "skills", "projects", "contact"].map(
          (section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          )
        )}

        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <img
            src={theme === "light" ? dark : light}
            alt="Theme Icon"
            className="toggle-image"
          />
          <span>{theme === "light" ? "Dark" : "Light"}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
