import React, { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';

// This is the URL of our backend server's API endpoint
// Remember we had to change the port to 5001
const API_URL = 'http://localhost:5001/api/products';

const shopGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive grid
  gap: '2rem',
  padding: '2rem 0',
};

const ShopPage = () => {
  // Step 1: Create state to store our products
  const [products, setProducts] = useState([]);
  // Create state to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Use the useEffect hook to fetch data when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
  try {
    const apiUrl = `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/products`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Data could not be fetched!');
    }
    const data = await response.json();
    setProducts(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

    fetchProducts();
  }, []); // The empty array means this effect runs only once

  // Step 3: Render content based on the state
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Our Collection</h2>
      <div style={shopGridStyle}>
        {products.map((product) => (
          // For each product in our state, render a ProductCard
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;