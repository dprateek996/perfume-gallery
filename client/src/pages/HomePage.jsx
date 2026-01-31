import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';

// Use an Unsplash image for the hero background
const heroImage = 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop';

const HomePage = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [attars, setAttars] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/products`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setPerfumes(data.filter(p => !p.name.toLowerCase().includes('attar')).slice(0, 3));
        setAttars(data.filter(p => p.name.toLowerCase().includes('attar')).slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    viewport: { once: true, amount: 0.2 }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <motion.section
        className="hero-luxury"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1>
            The Art of <span>Scent</span>
          </h1>
          <p>
            Discover rare fragrances crafted with passion. Each bottle tells a story of 
            tradition, innovation, and the pursuit of olfactory perfection.
          </p>
          <Link to="/shop">
            <motion.button 
              className="hero-luxury-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collection
            </motion.button>
          </Link>
        </motion.div>

        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.section>

      {/* FEATURES BAR */}
      <section className="features-section">
        <motion.div 
          className="features-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="feature-item" variants={fadeInUp}>
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <h4>Authenticity Guaranteed</h4>
            <p>Every fragrance is 100% genuine and sourced directly from master perfumers</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeInUp}>
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <h4>Free Shipping</h4>
            <p>Complimentary delivery on orders above ₹2,500 across India</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeInUp}>
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="20 12 20 22 4 22 4 12"/>
              <rect x="2" y="7" width="20" height="5"/>
              <line x1="12" y1="22" x2="12" y2="7"/>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
            </svg>
            <h4>Luxury Packaging</h4>
            <p>Exquisitely wrapped, ready to gift or cherish for yourself</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeInUp}>
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <h4>Expert Support</h4>
            <p>Personalized fragrance consultations from our scent specialists</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SIGNATURE PERFUMES SECTION */}
      <motion.section className="content-section" {...sectionAnimation}>
        <div className="section-header">
          <h2 className="section-title">Signature Perfumes</h2>
          <p className="section-subtitle">
            Modern scents for the discerning individual. A collection where classic notes meet contemporary artistry.
          </p>
        </div>
        <div className="product-grid">
          {perfumes.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/shop" className="btn btn-secondary">
            View All Perfumes
          </Link>
        </motion.div>
      </motion.section>

      {/* CRAFTSMANSHIP SECTION */}
      <motion.section className="craftsmanship-section" {...sectionAnimation}>
        <div className="image-content">
          <img 
            src="https://www.jainperfumers.com/cdn/shop/articles/5-amazing-benefits-and-uses-of-attar-265172.jpg?v=1727435890" 
            alt="Artisanal Perfume Crafting" 
          />
        </div>
        <div className="text-content">
          <h2 className="section-title">The Art of Craft</h2>
          <p>
            Each bottle is a testament to our philosophy: purity of ingredients, reverence for tradition, 
            and a passion for innovation. We source the rarest botanicals and blend them with meticulous care, 
            creating fragrances that are not just worn, but experienced.
          </p>
          <p>
            From the rose gardens of Kannauj to the oud forests of Assam, we journey across the subcontinent 
            to bring you scents that capture the essence of India's rich perfumery heritage.
          </p>
          <Link to="/about" className="btn btn-primary">
            Discover Our Story
          </Link>
        </div>
      </motion.section>

      {/* TRADITIONAL ATTARS SECTION */}
      <motion.section className="content-section" {...sectionAnimation}>
        <div className="section-header">
          <h2 className="section-title">Traditional Attars</h2>
          <p className="section-subtitle">
            Experience the soul of perfumery with our pure, oil-based attars. 
            Concentrated, complex, and deeply personal.
          </p>
        </div>
        <div className="product-grid">
          {attars.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/shop" className="btn btn-secondary">
            Explore Attars
          </Link>
        </motion.div>
      </motion.section>

      {/* NEWSLETTER SECTION */}
      <motion.section className="newsletter-section" {...sectionAnimation}>
        <h2 className="section-title">Join Our World</h2>
        <p>
          Subscribe for exclusive launches, fragrance tips, and members-only offers.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            className="newsletter-input" 
            placeholder="Enter your email" 
            required
          />
          <button type="submit" className="btn btn-gold">
            Subscribe
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default HomePage;