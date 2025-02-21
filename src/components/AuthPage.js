import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext
  const backendBaseUrl = 'http://localhost:8080';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? `${backendBaseUrl}/api/auth/login` : `${backendBaseUrl}/api/auth/signup`;
    const body = isLogin
      ? { email, password }
      : { email, password, name };

    try {
      const response = await axios.post(url, body, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Authenticated user:', response.data);

      // Pass user data to the login function
      login({
        name: response.data.name, // Assuming the backend returns the user's name
        email: response.data.email,
      });

      navigate('/dashboard'); // Redirect to dashboard after successful login/signup
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        )}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;