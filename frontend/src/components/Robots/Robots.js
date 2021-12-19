import React from 'react';
import Robot from '../Robot/Robot';
import './Robots.css';

function Robots() {
  const materials = ['Concrete', 'Cotton', 'Fresh', 'Frozen',
                    'Granite', 'Metal', 'Plastic', 'Rubber',
                    'Soft', 'Steel', 'Wooden']
  return (
  <div className='robotList'>
    <div className='robotListFilters'>
      <form className='robotListFilterForm'>
        <fieldset className='robotListFilterFieldset'>
          <legend className='robotListFilterLegend'>Filter the robots with materials</legend>
          <div className='robotListFilterContainer'>
          { materials.map((material) =>
            <div className='robotListFilterItem'>
              <input type='checkbox' name='robotFilter' value={material}/>
              {material}
            </div>)
          }
          </div>
        </fieldset>
      </form>
    </div>
    <div className='robotListContainer'>
      <Robot/>
      <Robot/>
      <Robot/>
      <Robot/>
      <Robot/>
      <Robot/>
      <Robot/>
      <Robot/>
      <Robot/>
    </div>
  </div>
  )
}

export default Robots;