import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';

// 1. Import your local image from the assets folder
import heroImage from '../assets/hero-background.jpg';

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

  // Reusable animation for sections that appear on scroll
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 }
  };

  return (
    <div>
      {/* 1. HERO SECTION - Now uses the local image via an inline style */}
      <motion.div
        className="hero-luxury"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <Link to="/shop">
            <button className="hero-luxury-button">Discover The Collection</button>
          </Link>
        </motion.div>
      </motion.div>

      {/* 2. SIGNATURE PERFUMES SECTION */}
      <motion.div className="content-section" {...sectionAnimation}>
        <h2 className="section-title">Signature Perfumes</h2>
        <p className="section-subtitle">Modern scents for the discerning individual. A collection where classic notes meet contemporary artistry.</p>
        <div className="product-grid">
          {perfumes.map(product => <ProductCard key={product._id} product={product} />)}
        </div>
      </motion.div>

      {/* 3. CRAFTSMANSHIP SECTION */}
      <motion.div className="craftsmanship-section" {...sectionAnimation}>
        <div className="image-content">
          <img src="https://www.jainperfumers.com/cdn/shop/articles/5-amazing-benefits-and-uses-of-attar-265172.jpg?v=1727435890" alt="Artisanal Perfume Crafting" />
        </div>
        <div className="text-content">
          <h2 className="section-title">The Art of Craft</h2>
          <p>
            Each bottle is a testament to our philosophy: purity of ingredients, reverence for tradition, and a passion for innovation. We source the rarest botanicals and blend them with meticulous care, creating fragrances that are not just worn, but experienced.
          </p>
          <Link to="/about" className="btn-primary">Learn Our Story</Link>
        </div>
      </motion.div>

      {/* 4. TRADITIONAL ATTARS SECTION */}
      <motion.div className="content-section" {...sectionAnimation}>
        <h2 className="section-title">Traditional Attars</h2>
        <p className="section-subtitle">Experience the soul of perfumery with our pure, oil-based attars. Concentrated, complex, and deeply personal.</p>
        <div className="product-grid">
          {attars.map(product => <ProductCard key={product._id} product={product} />)}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;