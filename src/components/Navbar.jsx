import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import logo from '../assets/logo.png';

const Navbar = ({ isScrolled }) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Logo in navbar when scrolled */}
      {isScrolled && (
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
      )}
      
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/images">Images</Link>
        <Link to="/contact">Contact</Link>
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