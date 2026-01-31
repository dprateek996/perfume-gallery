import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: true, amount: 0.2 }
  };

  return (
    <div className="about-page" style={{ paddingTop: '100px' }}>
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">Our Story</h1>
        <p className="about-intro">
          Born from a passion for the timeless art of perfumery, Perfume Gallery is more than just a shop—it 
          is a journey into the soul of fragrance. We believe that every scent tells a story, evokes a memory, 
          and becomes a part of who you are.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div className="about-section" {...sectionAnimation}>
          <img 
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800" 
            alt="Perfume Crafting" 
            className="about-section-image"
          />
          <div className="about-section-content">
            <h3>The Art of Selection</h3>
            <p>
              Our mission is to uncover the most captivating scents from around the world. From the rare oud 
              forests of Assam to the sun-drenched floral fields of Kannauj, we journey across India and beyond 
              to find fragrances that move the soul.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Each perfume in our collection has been carefully evaluated and selected for its uniqueness, 
              quality of ingredients, and the emotion it evokes.
            </p>
          </div>
        </motion.div>

        <motion.div className="about-section" {...sectionAnimation}>
          <img 
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800" 
            alt="Traditional Attar Making" 
            className="about-section-image"
          />
          <div className="about-section-content">
            <h3>Heritage & Craftsmanship</h3>
            <p>
              We partner with master perfumers who share our dedication to craftsmanship, using only the 
              finest, ethically-sourced ingredients. Many of our traditional attars come from families who 
              have been perfecting their art for generations.
            </p>
            <p style={{ marginTop: '1rem' }}>
              This commitment to authenticity and quality is what sets every bottle in our collection apart.
            </p>
          </div>
        </motion.div>

        <motion.div className="about-section" {...sectionAnimation}>
          <img 
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800" 
            alt="Perfume Collection" 
            className="about-section-image"
          />
          <div className="about-section-content">
            <h3>Your Personal Signature</h3>
            <p>
              We believe that a fragrance is a form of self-expression, a personal signature that tells a 
              story without words. That is why we curate scents that are both modern and timeless—waiting 
              to become a part of your own unique story.
            </p>
            <p className="about-signature">— Ammar Tariq, Founder</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;