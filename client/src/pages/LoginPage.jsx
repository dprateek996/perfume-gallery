import React, { useState, useContext } from 'react'; // 1. Add useContext
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // 2. Import AuthContext

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // 3. Get the login function from context

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/users/login`;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to login');
    }

    login(data);
    navigate('/');

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  // ... the rest of the component is the same
  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
          {/* ... form inputs */}
          <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <Link to="/signup" className="auth-switch-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};

export default LoginPage;