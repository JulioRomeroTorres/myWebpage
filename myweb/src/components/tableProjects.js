import React from 'react';
import {Projectelem} from './projectId'
import '../stylesheets/tableProjects.css'

const roboticArray = [
  {
    idproject: 1,
    nameProject: 'Autonomous Drone',
  },
  {
    idproject: 2,
    nameProject: 'Path Plannig optimitation with Time Optimal Scaling',
  },
  {
    idproject: 3,
    nameProject: 'Camera Detection',
  },
  {
    idproject: 4,
    nameProject: 'Ratitex',
  }

];

const fullstackArray=[
  {
    idproject: 1,
    nameProject: 'robotics'
  }
]

const folderRobotic = 'robotics';
const folderFullstack = 'developer'

export function Tableproject(props){
  
  var folderName = props.folder;
  var isRobot;

  if( props.folder === 'robotics' ) isRobot = true;
  else isRobot = false;

  return(
    //className in TableProject  container d -flex justify-content-center align-items-center h-100 
    <div className = 'table-container'>
      <h2>{props.title} </h2>
      <div className='row'> 
        {
          isRobot ? roboticArray.map( elementArr => (
            <div className='col-md-3' key={elementArr.idproject}> 
              <Projectelem
                name = {elementArr.nameProject}
                folder = {folderName}
                idproject = {elementArr.idproject}
              />
            </div>
            )): fullstackArray.map( elementArr => (
              <div className='col-md-3' key={elementArr.idproject}> 
                <Projectelem
                  name = {elementArr.nameProject}
                  folder = {folderName}
                  idproject = {elementArr.idproject}
                />
              </div>
              ))
        }
      </div>
    </div>
  );

}
export default Tableproject;