import React from 'react';
import { motion } from 'framer-motion';

const contactStyle = {
  maxWidth: '800px',
  margin: '2rem auto',
  textAlign: 'center',
};

const infoStyle = {
  marginTop: '2rem',
  lineHeight: '2'
};

const ContactPage = () => {
  return (
    <motion.div
      style={contactStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ marginTop: '2rem' }}>
        We would love to hear from you. Whether you have a question about our collection, need a scent recommendation, or wish to inquire about an order, our team is here to help.
      </p>
      <div style={infoStyle}>
        <p><strong>Customer Service:</strong> <a href="mailto:support@scentoria.com">support@perfumegallery.com</a></p>
        <p><strong>Press & Media Inquiries:</strong> <a href="mailto:media@scentoria.com">media@perfumegallery.com</a></p>
        <p><strong>Visit Our Flagship Store:</strong> Swaroop Nagar,Kanpur,Uttar Pradesh</p>
        <p><strong>Phone:</strong> <u> +91 9616102661 </u></p>
      </div>
    </motion.div>
  );
};

export default ContactPage;