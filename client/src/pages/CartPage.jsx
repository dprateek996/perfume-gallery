import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import ShoppingCartIcon from '../components/ui/shopping-cart-icon';
import TrashIcon from '../components/ui/trash-icon';
import ArrowNarrowRightIcon from '../components/ui/arrow-narrow-right-icon';

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
    <div className="min-h-screen bg-white pt-28 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-stone mb-5 block">
            Your Selection
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-normal text-ink tracking-tight mb-4">
            Shopping Cart
          </h1>
          <p className="text-stone">
            {cartItems.length === 0 
              ? 'Your cart is empty' 
              : `${cartItems.reduce((acc, item) => acc + item.qty, 0)} items in your cart`
            }
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-sand mx-auto mb-8">
              <ShoppingCartIcon size={96} strokeWidth={1} color="currentColor" />
            </div>
            <p className="text-lg text-stone mb-8 max-w-md mx-auto">
              Your shopping cart is waiting to be filled with wonderful fragrances.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-white font-medium text-sm tracking-wide uppercase rounded transition-all duration-300 hover:bg-gold no-underline"
            >
              Explore Collection
              <ArrowNarrowRightIcon size={16} strokeWidth={2} color="currentColor" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cartItems.map((item, index) => (
                <motion.div 
                  key={item._id}
                  className="flex gap-6 p-6 bg-cream rounded-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/product/${item._id}`} className="shrink-0">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={`/product/${item._id}`}
                      className="font-heading text-lg font-medium text-ink no-underline hover:text-gold transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-stone mt-1 line-clamp-1">{item.scentNotes}</p>
                    <p className="font-heading text-lg font-medium text-ink mt-2">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <select
                      value={item.qty}
                      onChange={(e) => updateItemQuantity(item._id, Number(e.target.value))}
                      className="px-4 py-2 bg-white border border-border rounded text-ink text-sm focus:outline-none focus:border-ink transition-colors"
                    >
                      {[...Array(Math.min(item.stock, 10)).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                    <motion.button 
                      onClick={() => removeItemFromCart(item._id)}
                      className="p-2 text-stone hover:text-ink transition-colors"
                      aria-label="Remove item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <TrashIcon size={18} strokeWidth={1.5} color="currentColor" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Order Summary */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-cream p-8 rounded-lg border border-border sticky top-28">
                <h3 className="font-heading text-xl font-medium text-ink mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-stone">
                    <span>Subtotal</span>
                    <span className="text-ink font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  
                  <div className="flex justify-between text-stone">
                    <span>Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? 'text-gold' : 'text-ink'}`}>
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                </div>
                
                {subtotal < 2500 && (
                  <div className="p-4 bg-white rounded-lg border border-border mb-6">
                    <p className="text-sm text-stone">
                      Add <span className="font-semibold text-gold">₹{(2500 - subtotal).toLocaleString('en-IN')}</span> more for free shipping!
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center py-4 border-t border-border mb-6">
                  <span className="font-heading text-lg font-medium text-ink">Total</span>
                  <span className="font-heading text-2xl font-semibold text-ink">₹{total.toLocaleString('en-IN')}</span>
                </div>

                <motion.button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-ink text-white font-medium text-sm tracking-wider uppercase rounded transition-all duration-300 hover:bg-gold"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Proceed to Checkout
                </motion.button>

                <Link 
                  to="/shop"
                  className="flex items-center justify-center gap-2 text-sm text-stone mt-6 hover:text-ink transition-colors no-underline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;