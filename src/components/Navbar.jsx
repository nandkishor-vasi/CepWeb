import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import logo from '../graphics/sample2.png';
import './Navbar.css';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Use the auth state and logout function

  console.log('isLoggedIn in Navbar:', isLoggedIn); // Log the isLoggedIn state

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img src={logo} alt="Reusable Tech Inventory Logo" className="logo" />
          <span>Reusable Tech Inventory</span>
        </a>
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/donate" className="nav-link">
          Donate
        </a>
        <a href="/listings" className="nav-link">
          Listings
        </a>
        <a href="/about" className="nav-link">
          About Us
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
        <a href="/dashboard" className="nav-link">
          Dashboard
        </a>
        {isLoggedIn ? (
          <button onClick={logout} className="auth-button">
            Logout
          </button>
        ) : (
          <Link to="/auth" className="auth-button">
            Login/Signup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;