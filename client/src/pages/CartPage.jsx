import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeItemFromCart, updateItemQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const shipping = subtotal > 2500 ? 0 : 199;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <div className="cart-page" style={{ paddingTop: '100px' }}>
      <div className="cart-container">
        <motion.div 
          className="cart-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Shopping Cart</h2>
          <p className="cart-count">
            {cartItems.length === 0 
              ? 'Your cart is empty' 
              : `${cartItems.reduce((acc, item) => acc + item.qty, 0)} items in your cart`
            }
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div 
            className="cart-empty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <svg className="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <p>Your shopping cart is waiting to be filled with wonderful fragrances.</p>
            <Link to="/shop" className="btn btn-primary">
              Explore Collection
            </Link>
          </motion.div>
        ) : (
          <div className="cart-content">
            <motion.div 
              className="cart-items"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cartItems.map((item, index) => (
                <motion.div 
                  key={item._id} 
                  className="cart-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                    <p className="item-notes">{item.scentNotes}</p>
                    <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="cart-item-actions">
                    <select
                      value={item.qty}
                      onChange={(e) => updateItemQuantity(item._id, Number(e.target.value))}
                    >
                      {[...Array(Math.min(item.stock, 10)).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                    <button 
                      onClick={() => removeItemFromCart(item._id)} 
                      className="btn-remove"
                      aria-label="Remove item"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="cart-summary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              
              {subtotal < 2500 && (
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--color-accent)', 
                  marginBottom: 'var(--space-sm)',
                  padding: '0.75rem',
                  background: 'var(--bg-warm)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  Add ₹{(2500 - subtotal).toLocaleString('en-IN')} more for free shipping!
                </p>
              )}

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>

              <motion.button 
                onClick={handleCheckout} 
                className="btn-checkout"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>

              <Link to="/shop" className="cart-continue">
                ← Continue Shopping
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;