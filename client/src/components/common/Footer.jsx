import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: 'var(--bg-dark)',
    color: 'var(--text-light)',
    padding: '5rem 2rem 2rem',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '3rem',
    marginBottom: '4rem',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const logoStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: 'var(--text-light)',
    marginBottom: '0.5rem',
  };

  const taglineStyle = {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: '1.6',
    maxWidth: '280px',
  };

  const headingStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--text-light)',
    marginBottom: '0.5rem',
    letterSpacing: '0.02em',
  };

  const linkStyle = {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    display: 'block',
    padding: '0.25rem 0',
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  };

  const socialIconStyle = {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '50%',
    color: 'rgba(255, 255, 255, 0.6)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  };

  const dividerStyle = {
    height: '1px',
    background: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '2rem',
  };

  const bottomStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const copyrightStyle = {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.4)',
  };

  const bottomLinksStyle = {
    display: 'flex',
    gap: '2rem',
  };

  const bottomLinkStyle = {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.4)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Brand Column */}
          <div style={columnStyle}>
            <div style={logoStyle}>Perfume Gallery</div>
            <p style={taglineStyle}>
              Curating the world's finest fragrances. Each scent tells a story, each bottle holds a memory waiting to be made.
            </p>
            <div style={socialContainerStyle}>
              <a href="#" style={socialIconStyle} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" style={socialIconStyle} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" style={socialIconStyle} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Shop</h4>
            <Link to="/shop" style={linkStyle}>All Fragrances</Link>
            <Link to="/shop" style={linkStyle}>Perfumes</Link>
            <Link to="/shop" style={linkStyle}>Attars</Link>
            <Link to="/shop" style={linkStyle}>Gift Sets</Link>
          </div>

          {/* Company Column */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Company</h4>
            <Link to="/about" style={linkStyle}>Our Story</Link>
            <Link to="/contact" style={linkStyle}>Contact Us</Link>
            <a href="#" style={linkStyle}>Careers</a>
            <a href="#" style={linkStyle}>Press</a>
          </div>

          {/* Support Column */}
          <div style={columnStyle}>
            <h4 style={headingStyle}>Support</h4>
            <a href="#" style={linkStyle}>FAQ</a>
            <a href="#" style={linkStyle}>Shipping</a>
            <a href="#" style={linkStyle}>Returns</a>
            <a href="mailto:support@perfumegallery.com" style={linkStyle}>support@perfumegallery.com</a>
          </div>
        </div>

        <div style={dividerStyle}></div>

        <div style={bottomStyle}>
          <p style={copyrightStyle}>
            © {currentYear} Perfume Gallery. All Rights Reserved.
          </p>
          <div style={bottomLinksStyle}>
            <a href="#" style={bottomLinkStyle}>Privacy Policy</a>
            <a href="#" style={bottomLinkStyle}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        footer a:hover {
          color: var(--color-gold) !important;
        }
        footer a[aria-label]:hover {
          border-color: var(--color-gold) !important;
          color: var(--color-gold) !important;
        }
        @media (max-width: 992px) {
          footer > div > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          footer > div > div:first-child > div > p {
            margin: 0 auto;
          }
          footer > div > div:first-child > div > div {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;