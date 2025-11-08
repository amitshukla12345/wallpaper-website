import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo in navbar when scrolled */}
      {isScrolled && (
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
      )}
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      
      <div className={`nav-left ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/images" onClick={() => setIsMenuOpen(false)}>Images</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
      
      <div className="nav-right">
        {isLoggedIn ? (
          <button className="login-btn" onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;