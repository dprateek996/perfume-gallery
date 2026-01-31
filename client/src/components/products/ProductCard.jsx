import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowNarrowRightIcon from '../ui/arrow-narrow-right-icon';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="no-underline block group">
      <motion.article 
        className="bg-white border border-border rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-stone/30"
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-cream to-surface">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Stock Badges */}
          {product.stock < 5 && product.stock > 0 && (
            <span className="absolute top-4 left-4 text-[0.7rem] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-full bg-gold/90 backdrop-blur-sm text-white shadow-soft">
              Low Stock
            </span>
          )}
          {product.stock === 0 && (
            <span className="absolute top-4 left-4 text-[0.7rem] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-full bg-ink/90 backdrop-blur-sm text-white">
              Sold Out
            </span>
          )}

          {/* Quick View Button */}
          <motion.div 
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
          >
            <span className="block text-center py-3 bg-white/95 backdrop-blur-md text-ink text-xs font-medium tracking-wide uppercase rounded-lg shadow-soft border border-white/50">
              View Details
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-ink text-xl font-medium tracking-tight mb-2 line-clamp-1 transition-colors duration-200 group-hover:text-gold">
            {product.name}
          </h3>
          <p className="text-stone text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.scentNotes}
          </p>
          <div className="flex items-center justify-between">
            <p className="font-heading text-ink text-2xl font-medium tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-stone group-hover:bg-gold group-hover:text-white transition-all duration-300">
              <ArrowNarrowRightIcon size={16} strokeWidth={2} color="currentColor" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProductCard;