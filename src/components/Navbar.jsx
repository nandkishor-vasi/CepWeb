import { useState, useCallback } from 'react';
import AuthModal from './AuthModal';
import logo from '../graphics/sample2.png'; 
import './Navbar.css';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
          <button className="auth-button" onClick={toggleAuthModal}>
            Login/Signup
          </button>
        </div>
      {isAuthModalOpen && (
        <>
          <div className="modal-backdrop" onClick={handleCloseModal} />
          <AuthModal
            onClose={handleCloseModal}
            onLogin={() => console.log('Login logic')}
            onSignup={() => console.log('Signup logic')}
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;