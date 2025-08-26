import React from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  border: '1px solid #f0f0f0',
  textAlign: 'center',
  paddingBottom: '1.5rem',
  backgroundColor: '#fff',
};

const imageContainerStyle = {
  width: '100%',
  height: '300px',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // This makes the image cover the container
  transition: 'transform 0.4s ease',
};

const nameStyle = {
  fontSize: '1.3rem',
  fontWeight: '600',
  margin: '1rem 0 0.5rem 0',
};

const notesStyle = {
  fontSize: '0.9rem',
  color: '#777',
  marginBottom: '1rem',
};

const priceStyle = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: 'var(--color-accent)',
};

// We're passing the whole 'product' object as a prop
const ProductCard = ({ product }) => {
  return (
    // The entire card is a link to the product's future detail page
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
      <div style={cardStyle} className="product-card">
        <div style={imageContainerStyle}>
          <img src={product.imageUrl} alt={product.name} style={imageStyle} />
        </div>
        <h3 style={nameStyle}>{product.name}</h3>
        <p style={notesStyle}>{product.scentNotes}</p>
        <p style={priceStyle}>₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </Link>
  );
};

export default ProductCard;