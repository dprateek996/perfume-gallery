import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === productToAdd._id);

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === productToAdd._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, qty: 1 }];
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const updateItemQuantity = (id, newQuantity) => {
    const qty = Number(newQuantity);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, qty: qty } : item
      )
    );
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};