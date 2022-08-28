import React from 'react';
import {Projectelem} from './projectId'
import '../stylesheets/tableProjects.css'

export function Tableproject(props){
  return(
    <div className = 'table-container'>
      <h2> Robotics Projects </h2>
      <div className='row'> 
        <Projectelem
          name = 'Autonomous Drone'
          folder = 'robotics'
          idproject = '1'
        />
        <Projectelem
            name = 'Path Plannig optimitation with Time Optimal Scaling'
            folder = 'robotics'
            idproject = '2'
          />
        <Projectelem
            name = 'Camera Detection'
            folder = 'robotics'
            idproject = '3'
          />
        <Projectelem
            name = 'Ratitex'
            folder = 'robotics'
            idproject = '4'
          />
      </div>
    </div>
  );

}

export default Tableproject;