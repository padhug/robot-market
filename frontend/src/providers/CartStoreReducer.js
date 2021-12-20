import React, { createContext, useEffect, useState } from 'react';

export const intialCartState = { cartItems: [{
    "name": "Bernie Parker",
    "image": "https://robohash.org/Bernie Parker.png?size=120x120",
    "price": "732.64",
    "stock": 4,
    "createdAt": "04-05-2021",
    "material": "Plastic",
    "quantity": 2
  },
  {
    "name": "Janis Pouros",
    "image": "https://robohash.org/Janis Pouros.png?size=120x120",
    "price": "265.59",
    "stock": 10,
    "createdAt": "12-11-2021",
    "material": "Metal",
    "quantity": 1
  },
  {
    "name": "Kacie Bergnaum",
    "image": "https://robohash.org/Kacie Bergnaum.png?size=120x120",
    "price": "720.93",
    "stock": 10,
    "createdAt": "12-11-2021",
    "material": "Soft",
    "quantity": 1
  }
], updatedAt: Number(new Date())};
export const ADD_TO_CART = 'addToCart';
export const REMOVE_CART_ITEM = 'decrementCartItem';

export const CartStoreReducer = (state = intialCartState, action) => {
  
  switch(action.type) {
    case ADD_TO_CART: {
      let findItemInCartIndex = state.cartItems.findIndex((cartItem) => cartItem.name === action.item.name);
      if(findItemInCartIndex!= -1) {
         state.cartItems[findItemInCartIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.item, quantity: 1 })
      }
      break;
    }
    case REMOVE_CART_ITEM: {
      let findItemInCartIndex = state.cartItems.findIndex((cartItem) => cartItem.name === action.item.name);
      if(findItemInCartIndex!= -1) {
        state.cartItems[findItemInCartIndex].quantity -= 1;

        if(state.cartItems[findItemInCartIndex].quantity === 1) {
          state.cartItems.splice(findItemInCartIndex, 1);
        }
      }
      break;
    }
    default:
      throw new Error();
  }

  return { cartItems: [...state.cartItems], updatedAt: Number(new Date()) };
}