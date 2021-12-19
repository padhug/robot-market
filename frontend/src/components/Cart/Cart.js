import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <div className='cartSection'>
      <h2 className='cartSectionHeader'>Cart</h2>
      <div className='cartDesc'>
      <div className='cartItemHeader'>
          <div className='cartItemHeaderName'>Robot Name</div>
          <div className='cartItemHeaderAmount'>Amount
          </div>
          <div className='cartItemHeaderPrice'>Price</div>
        </div>

        <div className='cartItem'>
          <div className='cartItemName'>Roboto newname boto newname</div>
          <div className='cartItemAmount'>
            <select>
              <option value='1'>1</option>
              <option value='1'>2</option>
              <option value='1'>3</option>
              <option value='1'>4</option>
              <option value='1'>5</option>
            </select>
          </div>
          <div className='cartItemPrice'>฿5,300.00</div>
        </div>
        <div className='cartItem'>
          <div className='cartItemName'>Roboto newname boto newname</div>
          <div className='cartItemAmount'>
            <select>
              <option value='1'>1</option>
              <option value='1'>2</option>
              <option value='1'>3</option>
              <option value='1'>4</option>
              <option value='1'>5</option>
            </select>
          </div>
          <div className='cartItemPrice'>฿5,300.00</div>
        </div>
        <div className='cartItem'>
          <div className='cartItemName'>Roboto newname boto newname</div>
          <div className='cartItemAmount'>
            <select>
              <option value='1'>1</option>
              <option value='1'>2</option>
              <option value='1'>3</option>
              <option value='1'>4</option>
              <option value='1'>5</option>
            </select>
          </div>
          <div className='cartItemPrice'>฿5,300.00</div>
        </div>
        <div className='cartItem'>
          <div className='cartItemName'>Roboto newname boto newname</div>
          <div className='cartItemAmount'>
            <select>
              <option value='1'>1</option>
              <option value='1'>2</option>
              <option value='1'>3</option>
              <option value='1'>4</option>
              <option value='1'>5</option>
            </select>
          </div>
          <div className='cartItemPrice'>฿5,300.00</div>
        </div>
        <div className='cartItem'>
          <div className='cartItemName'>Roboto newname boto newname</div>
          <div className='cartItemAmount'>
            <select>
              <option value='1'>1</option>
              <option value='1'>2</option>
              <option value='1'>3</option>
              <option value='1'>4</option>
              <option value='1'>5</option>
            </select>
          </div>
          <div className='cartItemPrice'>฿5,300.00</div>
        </div>
        <div className='cartPricing'>
        <div className='cartTotalPricingLabel'>Total cost:</div>
        <div className='cartTotalPricing'>฿5,300.00</div>
      </div>
      </div>
      
    </div>
    
  )
}

export default Cart;