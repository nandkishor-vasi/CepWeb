import { useState } from 'react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = () => setIsAuthModalOpen(!isAuthModalOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Reusable Tech Inventory</a>
      </div>
      <div className="navbar-links">
        <a href="/donate">Donate</a>
        <a href="/listings">Listings</a>
        <button onClick={toggleAuthModal}>Login/Signup</button>
      </div>
      {isAuthModalOpen && (
        <AuthModal
          onClose={toggleAuthModal}
          onLogin={() => console.log('Login logic')}
          onSignup={() => console.log('Signup logic')}
        />
      )}
    </nav>
  );
};

export default Navbar;