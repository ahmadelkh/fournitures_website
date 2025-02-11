import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Fourniture Et Plus</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
