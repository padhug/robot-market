import React, { createContext, useEffect, useState } from 'react';

export const RobotsContext = createContext({ robots: []});

export const RobotsProvider = ({children}) => {
  const [robots, setRobots] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/api/robots')
      .then((data)=> data.json())
      .then((robots)=> { 
        robots = robots.data.map((robot) => {
          let robotCreated = new Date(robot.createdAt);
          return {...robot, createdAt: `${robotCreated.getDate() > 9 ? robotCreated.getDate() : '0' + robotCreated.getDate()}-`+
                                       `${(robotCreated.getMonth()+1) > 9 ? (robotCreated.getMonth()+1) : '0'+(robotCreated.getMonth()+1)}-`+
                                       `${robotCreated.getFullYear()}`}
        })
        setRobots(robots)})
      .catch(e => console.log(e));
  }, []);

  return <RobotsContext.Provider value={ {robots: robots} }>
          {children}
         </RobotsContext.Provider>
}
