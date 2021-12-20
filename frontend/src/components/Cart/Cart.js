import React, { useContext, useEffect, useState, useReducer } from 'react';  
import { CartContext } from '../../providers/CartStoreProvider';
import { ADD_TO_CART, REMOVE_CART_ITEM, CartStoreReducer, intialCartState } from '../../providers/CartStoreReducer';
import './Cart.css';

const Cart =() => {
  const [cartContext, dispatch] = useReducer(CartStoreReducer, { cartItems: [] });

  const calculateTotal = () => {
    let total = cartContext.cartItems.reduce((pvalue, item)=>{
                  pvalue += (item.quantity * item.price)
                  return pvalue;
                }, 0);

    return Number(total).toFixed(2);
  }

  const addQuantity = (item) => {
    dispatch({ type: ADD_TO_CART, 
      item: item
     });
  }

  const removeQuantity = (item) => {
    dispatch({ type: REMOVE_CART_ITEM, 
      item: item
     });
  }

  console.log('checking cart')
  return (
    <>

    <div className='cartSection'>
      <h2 className='cartSectionHeader'>{cartContext.cartItems.length > 0 ? 'Cart' : 'Empty Cart' }</h2>
      <div className='cartDesc'>
      <div className='cartItemHeader'>
          <div className='cartItemHeaderName'>Robot Name</div>
          <div className='cartItemHeaderAmount'>Amount
          </div>
          <div className='cartItemHeaderPrice'>Price</div>
        </div>
        { cartContext.cartItems.map((cartItem) => 
            <div key={cartItem.name} className='cartItem'>
              <div className='cartItemName'>{JSON.stringify(cartItem)}</div>
              <div className='cartItemAmount'>
                <button onClick={removeQuantity(cartItem)} className='cartItemReduceQty cartItemQtyBtn'>-</button>
                  {cartItem.quantity}
                <button onClick={addQuantity(cartItem)} className='cartItemIncreaseQty cartItemQtyBtn'>+</button>
              </div>
              <div className='cartItemPrice'>฿{cartItem.quantity * cartItem.price}</div>
          </div>      
        )
        }
      
        <div className='cartPricing'>
          <div className='cartTotalPricingLabel'>Total cost:</div>
          <div className='cartTotalPricing'>฿{calculateTotal()}</div>
        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default Cart;