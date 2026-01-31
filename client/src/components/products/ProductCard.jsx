import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
      <article className="product-card">
        <div className="product-card-image">
          <img src={product.imageUrl} alt={product.name} />
          <div className="product-card-overlay"></div>
          {product.stock < 5 && product.stock > 0 && (
            <span className="product-card-badge">Low Stock</span>
          )}
          {product.stock === 0 && (
            <span className="product-card-badge" style={{ background: '#dc2626', color: 'white' }}>
              Sold Out
            </span>
          )}
        </div>
        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-notes">{product.scentNotes}</p>
          <p className="product-card-price">₹{product.price.toLocaleString('en-IN')}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;