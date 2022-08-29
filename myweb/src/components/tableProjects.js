import React from 'react';
import {Projectelem} from './projectId'
//import '../stylesheets/tableProjects.css'

const roboticArray = [
  {
    idproject: 1,
    nameProject: 'Autonomous Drone',
    folder:'robotics'
  },
  {
    idproject: 2,
    nameProject: 'Path Plannig optimitation with Time Optimal Scaling',
    folder:'robotics'
  },
  {
    idproject: 3,
    nameProject: 'Camera Detection',
    folder:'robotics'
  },
  {
    idproject: 4,
    nameProject: 'Ratitex',
    folder:'robotics'
  }

];

const fullstackArray=[
  {
    idproject: 1,
    nameProject: 'robotics',
    folder:'developer'
  }
]

const folderRobotic = 'robotics';
const folderFullstack = 'developer'

export function Tableproject(props){
  
  var folderName = props.folder;
  return(
    //className in TableProject  container d -flex justify-content-center align-items-center h-100 
    <div className = 'table-container'>
      <h2> {props.title} </h2>
      <div className='row'> 
        {
          roboticArray.map( elementArr => (
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