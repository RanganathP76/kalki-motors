import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && !e.target.closest(".hamburger")) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundImage: scrolled
          ? `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/header-bg.jpg")`
          : `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/header-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Logo */}
      <div className="logo">Kalki Motors</div>

      {/* Navigation */}
      <nav ref={navRef} className={`nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li><NavLink to="/" className="link" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/offers" className="link" onClick={() => setIsOpen(false)}>Offers</NavLink></li>
          <li><NavLink to="/services" className="link" onClick={() => setIsOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/contact" className="link" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
