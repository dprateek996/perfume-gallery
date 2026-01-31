import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const cardAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="contact-page" style={{ paddingTop: '100px' }}>
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-intro">
          We would love to hear from you. Whether you have a question about our collection, 
          need a scent recommendation, or wish to inquire about an order, our team is here to help.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-card"
          {...cardAnimation}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <h4>Customer Service</h4>
          <a href="mailto:support@perfumegallery.com">support@perfumegallery.com</a>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            Response within 24 hours
          </p>
        </motion.div>

        <motion.div 
          className="contact-card"
          {...cardAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <h4>Phone</h4>
          <a href="tel:+919616102661">+91 96161 02661</a>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            Mon-Sat, 10am - 7pm IST
          </p>
        </motion.div>

        <motion.div 
          className="contact-card"
          {...cardAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <h4>Flagship Store</h4>
          <p>Swaroop Nagar<br/>Kanpur, Uttar Pradesh</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            Visit by appointment
          </p>
        </motion.div>

        <motion.div 
          className="contact-card"
          {...cardAnimation}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <h4>Press & Media</h4>
          <a href="mailto:media@perfumegallery.com">media@perfumegallery.com</a>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            For media inquiries
          </p>
        </motion.div>
      </div>

      <motion.div 
        style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          padding: '3rem',
          background: 'var(--bg-warm)',
          borderRadius: 'var(--radius-lg)'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 style={{ marginBottom: '1rem' }}>Follow Our Journey</h3>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Stay connected for new arrivals, fragrance tips, and behind-the-scenes stories.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a 
            href="#" 
            style={{ 
              padding: '0.8rem 1.5rem',
              border: '1.5px solid var(--color-primary)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-primary)',
              fontSize: '0.85rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.25s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
          <a 
            href="#" 
            style={{ 
              padding: '0.8rem 1.5rem',
              border: '1.5px solid var(--color-primary)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-primary)',
              fontSize: '0.85rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.25s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;