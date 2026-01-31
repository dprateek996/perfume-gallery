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

  const filters = [
    { key: 'all', label: 'All Fragrances' },
    { key: 'perfumes', label: 'Perfumes' },
    { key: 'attars', label: 'Attars' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-surface flex flex-col items-center justify-center pt-24">
        <div className="w-12 h-12 border-2 border-sand border-t-gold rounded-full animate-spin mb-4"></div>
        <p className="text-charcoal text-sm tracking-wide">Loading our collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-surface flex flex-col items-center justify-center pt-24 px-6 text-center">
        <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-stone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <p className="text-ink text-lg mb-6 font-medium">{error}</p>
        <motion.button 
          className="btn-primary"
          onClick={() => window.location.reload()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Try Again
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-surface pt-28 pb-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gold mb-4 block">
            Explore
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-normal text-ink tracking-tight mb-5">
            Our Collection
          </h1>
          <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed mb-10">
            Explore our curated selection of artisanal fragrances, from contemporary perfumes to traditional attars.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button 
                key={filter.key}
                className={`px-6 py-3 text-sm font-medium tracking-normal rounded-lg transition-all duration-300 ${
                  activeFilter === filter.key 
                    ? 'bg-ink text-white shadow-soft' 
                    : 'bg-white text-charcoal border border-border hover:border-stone hover:shadow-soft'
                }`}
                onClick={() => handleFilter(filter.key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div 
          className="mb-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-sm text-stone">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-stone text-lg">
              No products found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;