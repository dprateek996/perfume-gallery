import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Rating from '../components/common/Rating';

// --- Styles (Keeping them here for completeness) ---
const pageStyle = {
  display: 'flex',
  gap: '3rem',
  maxWidth: '1000px',
  margin: '2rem auto',
};
const imageContainerStyle = { flex: 1 };
const imageStyle = { width: '100%', height: 'auto' };
const detailsContainerStyle = { flex: 1, paddingTop: '2rem' };
const nameStyle = { fontSize: '2.5rem', marginBottom: '1rem' };
const notesStyle = { fontSize: '1.1rem', color: '#666', marginBottom: '2rem' };
const descriptionStyle = { lineHeight: 1.7, marginBottom: '2rem' };
const priceStyle = { fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '2rem' };
const buttonStyle = {
  display: 'inline-block',
  backgroundColor: 'var(--color-primary)',
  color: '#fff',
  padding: '1rem 2.5rem',
  border: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};
// --- End of Styles ---

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useContext(CartContext); // Get function from context

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      addItemToCart(product);
      navigate('/cart'); // Redirect to cart page
    }
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={pageStyle}>
      <div style={imageContainerStyle}>
        <img src={product.imageUrl} alt={product.name} style={imageStyle} />
      </div>
      <div style={detailsContainerStyle}>
        <h1 style={nameStyle}>{product.name}</h1>
        <div style={{ marginBottom: '1rem' }}>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </div>
        <p style={notesStyle}>{product.scentNotes}</p>
        <p style={descriptionStyle}>{product.description}</p>
        <p style={priceStyle}>₹{product.price.toLocaleString('en-IN')}</p>
        <button
          onClick={handleAddToCart}
          style={buttonStyle}
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;