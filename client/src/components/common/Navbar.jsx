import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const { userInfo, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on home page for transparent navbar
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // Dynamic styles based on scroll and page
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? '0.875rem 2rem' : '1.25rem 2rem',
    backgroundColor: scrolled || !isHomePage ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: scrolled || !isHomePage ? 'blur(16px)' : 'none',
    borderBottom: scrolled || !isHomePage ? '1px solid var(--border)' : 'none',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontFamily: 'var(--font-heading)',
    textDecoration: 'none',
    transition: 'opacity 0.3s ease',
  };

  const logoTextStyle = {
    fontSize: '1.5rem',
    fontWeight: '500',
    letterSpacing: 'var(--tracking-tight)',
    color: scrolled || !isHomePage ? 'var(--text-primary)' : 'var(--text-light)',
    transition: 'color 0.2s ease',
  };

  const logoSubStyle = {
    fontSize: '0.65rem',
    fontWeight: '500',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: scrolled || !isHomePage ? 'var(--text-secondary)' : 'rgba(255, 255, 255, 0.7)',
    marginTop: '-1px',
    display: 'block',
    transition: 'color 0.2s ease',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
  };

  const linkStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: '0.01em',
    color: scrolled || !isHomePage ? 'var(--text-primary)' : 'var(--text-light)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    position: 'relative',
  };

  const cartLinkStyle = {
    ...linkStyle,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const userGreetingStyle = {
    fontSize: '0.8rem',
    fontWeight: '500',
    color: scrolled || !isHomePage ? 'var(--text-secondary)' : 'rgba(255, 255, 255, 0.9)',
    padding: '0.5rem 1rem',
    background: scrolled || !isHomePage ? 'var(--bg-muted)' : 'rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-full)',
    border: scrolled || !isHomePage ? '1px solid var(--border)' : '1px solid rgba(255, 255, 255, 0.2)',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>
          <div style={logoTextStyle}>Perfume Gallery</div>
          <span style={logoSubStyle}>Artisan Fragrances</span>
        </Link>
        
        <ul style={navLinksStyle}>
          <li>
            <Link to="/shop" style={linkStyle}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" style={cartLinkStyle}>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>
          </li>
          {userInfo ? (
            <>
              <li>
                <span style={userGreetingStyle}>
                  Hello, {userInfo.name.split(' ')[0]}
                </span>
              </li>
              <li>
                <button 
                  onClick={handleLogout} 
                  className="logout-button"
                  style={{
                    ...linkStyle,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link 
                to="/login" 
                style={{
                  ...linkStyle,
                  padding: '0.6rem 1.5rem',
                  border: scrolled || !isHomePage ? '1.5px solid var(--text-primary)' : '1.5px solid rgba(250, 247, 242, 0.6)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.25s ease',
                }}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;