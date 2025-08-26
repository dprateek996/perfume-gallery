import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, addItemToCart, removeItemFromCart, updateItemQuantity } = useContext(CartContext);

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleCheckout = () => {
    // Later, this will redirect to a shipping/payment page
    console.log('Proceeding to checkout');
    navigate('/login?redirect=/shipping'); // Example redirect
  };

  return (
    <div className="cart-container">
      <h2 className="section-title">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                  <p>₹{item.price.toLocaleString('en-IN')}</p>
                  <div className="cart-item-actions">
                    <select
                      value={item.qty}
                      onChange={(e) => updateItemQuantity(item._id, e.target.value)}
                    >
                      {[...Array(item.stock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                    <button onClick={() => removeItemFromCart(item._id)} className="btn-remove">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <button onClick={handleCheckout} className="btn-checkout" disabled={cartItems.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;