import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import "./Navbar.css";

import logo from "../../assets/imeges/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    setScrolled(window.scrollY > 80); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={scrolled ? "navbar scrolled" : "navbar"}>

        <div className="container nav-container">

          {/* ================= Logo ================= */}

          <a href="#home" className="logo">

            <img src={logo} alt="Krisha Enterprises Logo" />

            <div className="logo-text">
              <h2>KRISHA</h2>
              <span>ENTERPRISES</span>
            </div>

          </a>

          {/* ================= Desktop Menu ================= */}

          <nav className="desktop-menu">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#services">Services</a>

            <a href="#products">Products</a>

            <a href="#gallery">Gallery</a>

            <a href="#contact">Contact</a>

          </nav>

          {/* ================= Right ================= */}

          <div className="desktop-right">

            <a href="tel:+919545746570" className="phone">

              <Phone size={17} />

              <span>+91 95457 46570</span>

            </a>

            <a href="#contact" className="quote-btn">
              Get Quote
            </a>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

      </header>

      {/* ================= Mobile Menu ================= */}

      <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#products" onClick={closeMenu}>
          Products
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="tel:+919545746570" className="mobile-phone">
          <Phone size={18} />
          <span>+91 95457 46570</span>
        </a>

        <a
          href="#contact"
          className="mobile-quote-btn"
          onClick={closeMenu}
        >
          Get Quote
        </a>

      </div>
    </>
  );
}

export default Navbar;