import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import ShoppingCartIcon from '../ui/shopping-cart-icon';
import UserIcon from '../ui/user-icon';
import LogoutIcon from '../ui/logout-icon';
import XIcon from '../ui/x-icon';

const Navbar = () => {
  const { userInfo, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const isTransparent = isHomePage && !scrolled;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent' 
          : 'bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-soft'
      }`}
      style={{ padding: scrolled ? '0.75rem 1.5rem' : '1rem 1.5rem' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="group no-underline">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h1 
              className={`font-heading text-2xl font-medium tracking-tight transition-colors duration-200 m-0 ${
                isTransparent ? 'text-white' : 'text-ink'
              }`}
            >
              Perfume Gallery
            </h1>
            <span 
              className={`text-[0.65rem] font-medium tracking-[0.12em] uppercase block -mt-0.5 transition-colors duration-200 ${
                isTransparent ? 'text-white/70' : 'text-stone'
              }`}
            >
              Artisan Fragrances
            </span>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to} 
                className={`text-sm font-medium tracking-normal transition-all duration-200 no-underline relative group py-2 ${
                  isTransparent ? 'text-white' : 'text-ink'
                } ${location.pathname === link.to ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full bg-gold' : 'w-0 group-hover:w-full'
                } ${isTransparent ? 'bg-white' : 'bg-gold'}`}></span>
              </Link>
            </li>
          ))}
          
          {/* Cart */}
          <li>
            <Link 
              to="/cart" 
              className={`relative flex items-center gap-2 transition-all duration-200 no-underline p-2 -m-2 rounded-lg hover:bg-white/10 ${
                isTransparent ? 'text-white' : 'text-ink'
              }`}
              aria-label={`Cart with ${cartItemCount} items`}
            >
              <ShoppingCartIcon 
                size={22} 
                strokeWidth={1.5} 
                color="currentColor"
              />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span 
                    className="absolute -top-1 -right-1 text-[0.6rem] font-semibold px-1.5 py-0.5 rounded-full min-w-[18px] text-center bg-gold text-white shadow-soft"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key={cartItemCount}
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </li>

          {/* User Actions */}
          {userInfo ? (
            <>
              <li>
                <span 
                  className={`text-xs font-medium px-4 py-2 rounded-full transition-colors ${
                    isTransparent 
                      ? 'bg-white/10 backdrop-blur-sm text-white/90 border border-white/20' 
                      : 'bg-surface text-charcoal border border-border'
                  }`}
                >
                  {userInfo.name.split(' ')[0]}
                </span>
              </li>
              <li>
                <motion.button 
                  onClick={handleLogout} 
                  className={`flex items-center gap-2 text-sm font-medium tracking-normal bg-transparent border-none py-2 px-3 rounded-lg transition-all duration-200 ${
                    isTransparent ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-cream'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogoutIcon size={18} strokeWidth={1.5} color="currentColor" />
                  Logout
                </motion.button>
              </li>
            </>
          ) : (
            <li>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/login" 
                  className={`text-sm font-medium tracking-normal px-6 py-2.5 rounded-lg transition-all duration-300 no-underline ${
                    isTransparent 
                      ? 'border border-white/40 text-white hover:bg-white hover:text-ink hover:border-white' 
                      : 'bg-ink text-white hover:bg-gold hover:shadow-soft'
                  }`}
                >
                  Login
                </Link>
              </motion.div>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden bg-transparent border-none p-2.5 rounded-lg transition-colors ${
            isTransparent ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-cream'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <XIcon size={24} strokeWidth={1.5} color="currentColor" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl mt-4 rounded-xl border border-border shadow-soft-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul className="flex flex-col gap-1 p-4 list-none m-0">
              {[
                { to: '/shop', label: 'Shop' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/cart', label: `Cart ${cartItemCount > 0 ? `(${cartItemCount})` : ''}` },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className={`text-base font-medium no-underline block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === link.to 
                        ? 'bg-cream text-ink' 
                        : 'text-charcoal hover:bg-surface'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-border mt-2 pt-2">
                {userInfo ? (
                  <button 
                    onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                    className="w-full text-left text-base font-medium bg-transparent border-none py-3 px-4 rounded-lg text-ink hover:bg-surface transition-colors"
                  >
                    Logout
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    className="block text-center text-base font-medium px-6 py-3 rounded-lg bg-ink text-white no-underline hover:bg-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;