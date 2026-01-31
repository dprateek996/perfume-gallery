import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import Rating from '../components/common/Rating';
import ShieldCheck from '../components/ui/shield-check';
import TruckElectricIcon from '../components/ui/truck-electric-icon';
import SparklesIcon from '../components/ui/sparkles-icon';
import HomeIcon from '../components/ui/home-icon';
import RosetteDiscountCheckIcon from '../components/ui/rosette-discount-check-icon';

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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24">
        <div className="w-10 h-10 border-2 border-sand border-t-ink rounded-full animate-spin mb-4"></div>
        <p className="text-stone text-sm tracking-wide">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24 px-8 text-center">
        <svg className="w-16 h-16 text-stone mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p className="text-ink text-lg mb-6">{error}</p>
        <Link 
          to="/shop" 
          className="px-8 py-3 bg-ink text-white font-medium text-sm tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold no-underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  if (!product) return null;

  const features = [
    { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, text: '100% Authentic' },
    { icon: <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>, text: 'Free Shipping ₹2,500+' },
    { icon: <><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/></>, text: 'Gift Wrapping' },
    { icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>, text: 'Secure Packaging' },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.nav 
          className="flex items-center gap-3 text-sm mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="text-stone hover:text-ink transition-colors no-underline">Home</Link>
          <span className="text-sand">/</span>
          <Link to="/shop" className="text-stone hover:text-ink transition-colors no-underline">Shop</Link>
          <span className="text-sand">/</span>
          <span className="text-ink font-medium">{product.name}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-cream border border-border">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-lg -z-10"></div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-stone mb-3 block">
                {product.name.toLowerCase().includes('attar') ? 'Traditional Attar' : 'Eau de Parfum'}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-normal text-ink tracking-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <Rating value={product.rating} />
                <span className="text-sm text-stone">{product.numReviews} reviews</span>
              </div>
            </div>

            <p className="text-base text-charcoal italic border-l-2 border-gold/50 pl-4">
              {product.scentNotes}
            </p>

            <p className="text-base text-charcoal leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-b border-border py-6">
              <p className="font-heading text-4xl font-medium text-ink tracking-tight">
                <span className="text-2xl text-stone mr-1">₹</span>
                {product.price.toLocaleString('en-IN')}
              </p>
            </div>

            <div className="space-y-4">
              <motion.button
                className={`w-full py-4 font-medium text-sm tracking-wide uppercase rounded transition-all duration-300 ${
                  product.stock === 0 
                    ? 'bg-sand/50 text-ink/50 cursor-not-allowed' 
                    : 'bg-ink text-white hover:bg-gold'
                }`}
                onClick={handleAddToCart}
                disabled={product.stock === 0 || isAdding}
                whileHover={product.stock > 0 ? { scale: 1.01 } : {}}
                whileTap={product.stock > 0 ? { scale: 0.99 } : {}}
              >
                {product.stock === 0 
                  ? 'Out of Stock' 
                  : isAdding 
                    ? 'Adding...' 
                    : 'Add to Cart'
                }
              </motion.button>

              <p className={`flex items-center justify-center gap-2 text-sm ${
                product.stock > 0 ? 'text-stone' : 'text-ink/50'
              }`}>
                {product.stock > 0 ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {product.stock} in stock
                  </>
                ) : (
                  'Currently unavailable'
                )}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-stone">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {feature.icon}
                  </svg>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;