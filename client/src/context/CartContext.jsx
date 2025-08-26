import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  // Try to get cart items from localStorage, or default to an empty array
  const initialCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  // This effect will run whenever cartItems changes, saving it to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === productToAdd._id);

      if (existingItem) {
        // If item exists, increase its quantity
        return prevItems.map((item) =>
          item._id === productToAdd._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // Otherwise, add the new item with quantity 1
        return [...prevItems, { ...productToAdd, qty: 1 }];
      }
    });
  };

  // Function to remove an item completely
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  // Function to update a specific item's quantity
  const updateItemQuantity = (id, newQuantity) => {
    const qty = Number(newQuantity);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, qty: qty } : item
      )
    );
  };

  // The value provided to all consuming components
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};