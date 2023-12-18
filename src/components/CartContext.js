import React, { createContext, useState } from 'react'

const CartContext=createContext();

const CartProvider=({children})=>{
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };
    const CartContextValue={cart,addToCart,removeFromCart};

    return <CartContext.Provider value={CartContextValue}>{children}</CartContext.Provider>
  }

export  {CartContext,CartProvider}