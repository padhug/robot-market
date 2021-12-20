import React, { useContext, useEffect, useState } from 'react';
import Robot from '../Robot/Robot';
import './Robots.css';
import { RobotsContext } from '../../providers/RobotsProvider';

const Robots =() => {
  const materials = ['Concrete', 'Cotton', 'Fresh', 'Frozen',
                    'Granite', 'Metal', 'Plastic', 'Rubber',
                    'Soft', 'Steel', 'Wooden'];
  const filteredMaterials = [];
  const robotsContext = useContext(RobotsContext);
  const [robots, setRobots] = useState(robotsContext.robots);

  useEffect(()=> {
    if(robots.length === 0) {
      setRobots(robotsContext.robots)
    }
  })

  function filterRobots() {
    if(filteredMaterials.length == 0){
      setRobots(robotsContext.robots);
    } else {
      setRobots(robotsContext.robots.filter((robot) => filteredMaterials.indexOf(robot.material) != -1))
    }
  };

  function handleFilter(e) {
    if(e.target.checked) {
      filteredMaterials.push(e.target.value)
    } else {
      if(filteredMaterials.indexOf(e.target.value) != -1) {
        filteredMaterials.splice(filteredMaterials.indexOf(e.target.value), 1)
      }
    }
    filterRobots();
  }

  return (
  <div className='robotList'>
    <div className='robotListFilters'>
      <form className='robotListFilterForm'>
        <fieldset className='robotListFilterFieldset'>
          <legend className='robotListFilterLegend'>Filter the robots with materials</legend>
          <div className='robotListFilterContainer'>
          { materials.map((material) =>
            <div key={material} className='robotListFilterItem'>
              <input type='checkbox' name='robotFilter' value={material} onChange={handleFilter}/>
              {material}
            </div>)
          }
          </div>
        </fieldset>
      </form>
    </div>
    <div className='robotListContainer'>
      {robots.map((robot) => <Robot key={robot.name} {...robot}/>)}
    </div>
  </div>
  )
}

export default Robots;