import React from 'react';
import './Robot.css';

function Robot() {
  return (
    <div className='robotItem'>
      <div className='robotName'>Roboto newname
      boto newname</div>
      <div className='robotImage'>
        <img src='https://robohash.org/Edgar Mayer.png?size=120x120'></img>
      </div>
      <div className='robotPrice'>฿5,300.00</div>
      <div className='robotStockAddToCart robotItemRow'>
        <span className='robotStock'>InStock</span>
        <button className='robotCartBtn'>Add to Cart</button>
      </div>
      <div className='robotCreatedInfo robotItemRow'>
        <span className='robotCreatedLabel'>Created At:</span>
        <div className='robotCreated'>30-11-1985</div>
      </div>
      <div className='robotMaterialInfo robotItemRow'>
        <span className='robotMaterialLabel'>Material:</span>
        <div className='robotMaterial'>Frozen</div>
      
      </div>
    </div>
  )
}

export default Robot;