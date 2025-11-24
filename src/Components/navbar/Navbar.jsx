import React, { useState } from 'react';
import './Navbar.css';                // ← Your CSS file
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';  

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Desktop Menu + Mobile Hamburger */}
      <div className="menu-container">
        <ul className={`menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-30} duration={500} >Home</Link></li>
        <li><Link activeClass="active" to="Program" spy={true} smooth={true} offset={-30} duration={500} >Program</Link></li>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-30} duration={400} >About us</Link></li>
        <li><Link activeClass="active" to="campus" spy={true} smooth={true} offset={-30} duration={500} >Campus</Link></li>
        <li><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-30} duration={500} >Testimonials</Link></li>
          <li>
            <button className="btn">Contact us</button>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;