import React, { useContext, useReducer, useState } from 'react';
import { ADD_TO_CART, CartStoreReducer, intialCartState } from '../../providers/CartStoreReducer';
import CartStoreProvider, { CartContext } from '../../providers/CartStoreProvider';
import './Robot.css';

const Robot = ({name, image, price, stock, createdAt, material}) => {
  const [cartContext, dispatch] = useReducer(CartStoreReducer, intialCartState);
  const cart = useContext(CartContext)
  const [currentStock, setStock] = useState(stock);

  const addToCart =() => {
    if(currentStock == 0) alert(`Sorry, you can\'t add it to cart! Robot out of stock!`);

    if(validateItemToAdd()) {
      setStock(currentStock-1);
      dispatch({ type: ADD_TO_CART, 
               item: {name, image, price, stock, createdAt, material}
              });  
    } else {
      alert(`Sorry you can\'t add it to cart!\nYou have chosen the maximum of 5 robot types!`);
    }
    localStorage.setItem('cartItem', JSON.stringify(CartContext.cartItems));
  }

  function validateItemToAdd() {
    let findItemInCartIndex = cartContext.cartItems.findIndex((cartItem) => cartItem.name === name);
    if((findItemInCartIndex === -1) && (cartContext.cartItems.length < 5)) return true;
    if((findItemInCartIndex >= 0)) return true;
    return false;
  }

return (
    <div key={name} className='robotItem'>
      <div className='robotName'>{name}</div>
      <div className='robotImage'>
        <img src={image}></img>
      </div>
      <div className='robotPrice'>฿{price}</div>
      <div className='robotStockAddToCart robotItemRow'>
        <span className='robotStock'>{currentStock > 0 ? 'InStock' : 'Out of Stock'}</span>
        <button disabled={currentStock==0} className='robotCartBtn' onClick={addToCart}>Add to Cart</button>
      </div>
      <div className='robotCreatedInfo robotItemRow'>
        <span className='robotCreatedLabel'>Created At:</span>
        <div className='robotCreated'>{createdAt}</div>
      </div>
      <div className='robotMaterialInfo robotItemRow'>
        <span className='robotMaterialLabel'>Material:</span>
        <div className='robotMaterial'>{material}</div>
      
      </div>
    </div>
  )
}

export default Robot;