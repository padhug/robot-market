import React from 'react';
import Robots from '../Robots/Robots';
import Cart from '../Cart/Cart';
import './Homepage.css';

function HomePage() {
  return (
    <div className='homePage'>
      <div className='robotSection'>
        <Robots/>
      </div>
      <div className='cartSection'>
        <Cart/>
      </div>
    </div>
  )
}

export default HomePage;