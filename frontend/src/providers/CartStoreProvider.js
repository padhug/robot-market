import React, { createContext, useEffect, useState, useReducer } from 'react';
import { intialCartState } from './CartStoreReducer';

export const CartContext = createContext(intialCartState);

export const CartProvider = ({children, initialState, reducer}) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState)
  return <CartContext.Provider value={{cartItems} }>
          {children}
         </CartContext.Provider>
}
