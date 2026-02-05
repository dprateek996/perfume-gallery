import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const [sortBy, setSortBy] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      params.append('page', currentPage);
      params.append('limit', 8);

      if (activeFilter !== 'all') {
        params.append('category', activeFilter === 'perfumes' ? 'perfume' : 'attar');
      }

      if (debouncedSearchTerm) {
        params.append('keyword', debouncedSearchTerm);
      }

      if (sortBy) {
        params.append('sort', sortBy);
      }

      const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/products?${params}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to load products');
      }

      const data = await response.json();
      setProducts(data.products);
      setPagination(data.pagination);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, activeFilter, debouncedSearchTerm, sortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, debouncedSearchTerm, sortBy]);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const filters = [
    { key: 'all', label: 'All Fragrances' },
    { key: 'perfumes', label: 'Perfumes' },
    { key: 'attars', label: 'Attars' },
  ];

  const sortOptions = [
    { value: '', label: 'Default' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'name', label: 'Name A-Z' },
  ];

  if (loading && products.length === 0) {
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
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
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
        <motion.div
          className="text-center mb-10"
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
          <p className="text-lg text-charcoal max-w-2xl mx-auto leading-relaxed mb-8">
            Explore our curated selection of artisanal fragrances, from contemporary perfumes to traditional attars.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex-1 relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search fragrances..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-border rounded-xl text-ink placeholder:text-stone focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone hover:text-ink transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3.5 bg-white border border-border rounded-xl text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 cursor-pointer transition-all"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`px-6 py-3 text-sm font-medium tracking-normal rounded-lg transition-all duration-300 ${activeFilter === filter.key
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
        </motion.div>

        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-sm text-stone">
            {pagination ? (
              <>Showing {products.length} of {pagination.total} products</>
            ) : (
              <>Showing {products.length} products</>
            )}
          </span>
          {loading && (
            <div className="w-5 h-5 border-2 border-sand border-t-gold rounded-full animate-spin"></div>
          )}
        </motion.div>

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
          {products.map((product) => (
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

        {products.length === 0 && !loading && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-stone text-lg mb-4">
              No products found {searchTerm && `for "${searchTerm}"`}
            </p>
            {searchTerm && (
              <motion.button
                onClick={() => setSearchTerm('')}
                className="text-gold hover:underline"
                whileHover={{ scale: 1.02 }}
              >
                Clear search
              </motion.button>
            )}
          </motion.div>
        )}

        {pagination && pagination.pages > 1 && (
          <motion.div
            className="flex items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={!pagination.hasPrev}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${pagination.hasPrev
                ? 'bg-white border border-border text-charcoal hover:border-gold hover:text-gold'
                : 'bg-surface text-stone cursor-not-allowed'
                }`}
              whileHover={pagination.hasPrev ? { scale: 1.02 } : {}}
              whileTap={pagination.hasPrev ? { scale: 0.98 } : {}}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Previous
            </motion.button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${currentPage === page
                    ? 'bg-ink text-white'
                    : 'bg-white border border-border text-charcoal hover:border-gold'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setCurrentPage(p => Math.min(pagination.pages, p + 1))}
              disabled={!pagination.hasNext}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${pagination.hasNext
                ? 'bg-white border border-border text-charcoal hover:border-gold hover:text-gold'
                : 'bg-surface text-stone cursor-not-allowed'
                }`}
              whileHover={pagination.hasNext ? { scale: 1.02 } : {}}
              whileTap={pagination.hasNext ? { scale: 0.98 } : {}}
            >
              Next
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;