import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/products`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to load products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredProducts(products);
    } else if (filter === 'perfumes') {
      setFilteredProducts(products.filter(p => !p.name.toLowerCase().includes('attar')));
    } else if (filter === 'attars') {
      setFilteredProducts(products.filter(p => p.name.toLowerCase().includes('attar')));
    }
  };

  if (loading) {
    return (
      <div className="loading-container" style={{ paddingTop: '120px' }}>
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading our collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" style={{ paddingTop: '120px' }}>
        <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p className="error-message">{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="shop-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <motion.div 
          className="shop-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Collection</h2>
          <p className="section-subtitle">
            Explore our curated selection of artisanal fragrances, from contemporary perfumes to traditional attars.
          </p>
          
          <div className="shop-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilter('all')}
            >
              All Fragrances
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'perfumes' ? 'active' : ''}`}
              onClick={() => handleFilter('perfumes')}
            >
              Perfumes
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'attars' ? 'active' : ''}`}
              onClick={() => handleFilter('attars')}
            >
              Attars
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="product-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            style={{ textAlign: 'center', padding: '4rem 0' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              No products found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;