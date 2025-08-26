import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

// --- Styles ---
const headerStyle = { /* ... styles ... */ };

// NEW TWO-LINE LOGO STYLES
const logoContainerStyle = {
  fontFamily: 'var(--font-heading)',
  fontWeight: '600',
  textTransform: 'uppercase',
  lineHeight: '1.2', // Controls the space between the two lines
  color: 'var(--color-primary)'
};
const logoLineOneStyle = {
  fontSize: '1.4rem',
  letterSpacing: '2px', // A little spacing
};
const logoLineTwoStyle = {
  fontSize: '0.9rem', // Smaller text for the second line
  letterSpacing: '5.5px', // Wider spacing to align with the top line
  fontWeight: '400', // Lighter weight
};

const navStyles = { /* ... styles ... */ };
const ulStyles = { /* ... styles ... */ };

const Navbar = () => {
  const { userInfo, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header style={headerStyle}>
      <nav style={navStyles}>
        {/* UPDATED LOGO STRUCTURE */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={logoContainerStyle}>
            <span style={logoLineOneStyle}>Perfume</span>
            <br />
            <span style={logoLineTwoStyle}>Gallery</span>
          </div>
        </Link>
        <ul style={ulStyles}>
          {/* ... nav links ... */}
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </Link>
          </li>
          {userInfo ? (
            <>
              <li>Hi, {userInfo.name.split(' ')[0]}</li>
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

// All style objects copied here for completeness
Object.assign(globalThis, { headerStyle, navStyles, ulStyles });
Object.assign(headerStyle, { padding: '1.5rem 2rem', borderBottom: '1px solid #f0f0f0', backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 1000 });
Object.assign(navStyles, { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' });
Object.assign(ulStyles, { display: 'flex', alignItems: 'center', gap: '2.5rem', fontSize: '1rem', fontWeight: '500' });


export default Navbar;