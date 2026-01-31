import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import Rating from '../components/common/Rating';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/products/${id}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Product not found!');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      setIsAdding(true);
      addItemToCart(product);
      setTimeout(() => {
        navigate('/cart');
      }, 300);
    }
  };

  if (loading) {
    return (
      <div className="loading-container" style={{ paddingTop: '120px' }}>
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading product details...</p>
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
        <Link to="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="product-details-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <motion.nav 
          style={{ marginBottom: '2rem', fontSize: '0.9rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <span style={{ margin: '0 0.75rem', color: 'var(--text-muted)' }}>/</span>
          <Link to="/shop" style={{ color: 'var(--text-muted)' }}>Shop</Link>
          <span style={{ margin: '0 0.75rem', color: 'var(--text-muted)' }}>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
        </motion.nav>

        <div className="product-details-container">
          {/* Product Image */}
          <motion.div 
            className="product-gallery"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="product-main-image"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="product-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="product-category">
              {product.name.toLowerCase().includes('attar') ? 'Traditional Attar' : 'Eau de Parfum'}
            </span>
            
            <h1 className="product-name">{product.name}</h1>
            
            <div className="product-rating">
              <Rating value={product.rating} />
              <span className="review-count">{product.numReviews} reviews</span>
            </div>

            <p className="product-scent-notes">{product.scentNotes}</p>

            <p className="product-description">{product.description}</p>

            <p className="product-price">
              <span className="currency">₹</span>
              {product.price.toLocaleString('en-IN')}
            </p>

            <div className="product-actions">
              <motion.button
                className="btn btn-primary"
                onClick={handleAddToCart}
                disabled={product.stock === 0 || isAdding}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ flex: 1 }}
              >
                {product.stock === 0 
                  ? 'Out of Stock' 
                  : isAdding 
                    ? 'Adding...' 
                    : 'Add to Cart'
                }
              </motion.button>
            </div>

            <p className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {product.stock} in stock
                </>
              ) : (
                'Currently unavailable'
              )}
            </p>

            <div className="product-features">
              <div className="product-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>100% Authentic</span>
              </div>
              <div className="product-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span>Free Shipping ₹2,500+</span>
              </div>
              <div className="product-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 12 20 22 4 22 4 12"/>
                  <rect x="2" y="7" width="20" height="5"/>
                  <line x1="12" y1="22" x2="12" y2="7"/>
                </svg>
                <span>Gift Wrapping</span>
              </div>
              <div className="product-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>Secure Packaging</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;