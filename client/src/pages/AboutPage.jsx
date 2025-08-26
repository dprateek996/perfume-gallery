import React from 'react';
import { motion } from 'framer-motion';

const aboutStyle = {
  maxWidth: '800px',
  margin: '2rem auto',
  textAlign: 'center',
  lineHeight: '1.8'
};

const AboutPage = () => {
  return (
    <motion.div
      style={aboutStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Our Story</h2>
      <p style={{ marginTop: '2rem' }}>
        Born from a passion for the timeless art of perfumery, Scentoria is more than just a shop—it is a journey. Our mission is to uncover the most captivating scents from around the world, from the rare oud forests of the East to the sun-drenched floral fields of France.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        We believe that a fragrance is a form of self-expression, a personal signature that tells a story without words. That is why we partner with master perfumers who share our dedication to craftsmanship, using only the finest, ethically-sourced ingredients to create scents that are both modern and timeless. Each bottle in our collection is a testament to this commitment, waiting to become a part of your own unique story.
      <br></br><b>     -Ammar Tariq </b>
      </p>
    </motion.div>
  );
};

export default AboutPage;