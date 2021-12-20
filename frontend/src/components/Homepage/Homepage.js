import React, { useContext } from 'react';
import Robots from '../Robots/Robots';
import Cart from '../Cart/Cart';
import { RobotsProvider, RobotsContext } from '../../providers/RobotsProvider';
import { CartProvider, CartContext } from '../../providers/CartStoreProvider';
import { intialCartState } from '../../providers/CartStoreReducer';

import './Homepage.css';

const HomePage =() => {
  const cartContext = useContext(CartContext);
  return (
    <div className='homePage'>
        <div className='robotSection'>
          <RobotsProvider>
            <CartProvider value={intialCartState}>
              <Robots/>
            </CartProvider>
          </RobotsProvider>
        </div>
        <div className='cartSection'>
          <CartProvider value={intialCartState}>
            <Cart/>
          </CartProvider>
        </div>
    </div>
  )
}

export default HomePage;