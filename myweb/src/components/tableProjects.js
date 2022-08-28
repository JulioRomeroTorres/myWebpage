import React from 'react';
import {Projectelem} from './projectId'
//import '../stylesheets/tableProjects.css'

export function Tableproject(props){
  return(
    <div className = 'container d -flex justify-content-center align-items-center h-100 '>
      <h2> Robotics Projects </h2>
      <div className='row'> 
        <div className='col-md-3'>
          <Projectelem
              name = 'Autonomous Drone'
              folder = 'robotics'
              idproject = '1'
            />

        </div>

        <div className='col-md-3'>
          <Projectelem
              name = 'Path Plannig optimitation with Time Optimal Scaling'
              folder = 'robotics'
              idproject = '2'
            />

        </div>

        <div className='col-md-3'>
          <Projectelem
              name = 'Camera Detection'
              folder = 'robotics'
              idproject = '3'
            />

        </div>

        <div className='col-md-3'>
          <Projectelem
              name = 'Ratitex'
              folder = 'robotics'
              idproject = '4'
            />

        </div>
      </div>
    </div>
  );

}

export default Tableproject;