import React from 'react';
import {Projectelem} from './projectId'
import '../stylesheets/tableProjects.css'
import { motion } from 'framer-motion';

const roboticArray = [
  {
    idproject: 1,
    nameProject: 'Autonomous Drone',
    directProject : '/Drone',
    urclcode : 'https://github.com/JulioRomeroTorres/cameraDetection/tree/yolov4-tiny'
  },
  {
    idproject: 2,
    nameProject: 'Trajectory planning for the autonomous movement of a robot',
    directProject : '/IRMA',
    urclcode : 'https://github.com/JulioRomeroTorres/cameraDetection/tree/yolov4-tiny'
  },
  {
    idproject: 3,
    nameProject: 'Real-Time Vehicle Detection',
    directProject : '/realtimedetection',
    urclcode : 'https://github.com/JulioRomeroTorres/cameraDetection/tree/yolov4-tiny'
  },
  {
    idproject: 4,
    nameProject: 'RATITEX',
    directProject : '/ratitex',
    urclcode : 'https://github.com/JulioRomeroTorres/cameraDetection/tree/yolov4-tiny'
  }

];

const fullstackArray=[
  {
    idproject: 1,
    nameProject: 'Automatic Virtual Financial Assistant',
    directProject : '/hacktathonntt',
    urclcode : 'https://github.com/JulioRomeroTorres/cameraDetection/tree/yolov4-tiny'
  },
  {
    idproject: 2,
    nameProject: 'Interface for remote control and monitoring of a SCADA system',
    directProject:'/IBMcloud',
    urclcode : 'https://github.com/JulioRomeroTorres/cameraDetection/tree/yolov4-tiny'
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
    <motion.div 
      animate={{
        y: 15 
      }} 
      transition={{ ease: "easeOut", duration: 1 }}
    
    className = 'table-container'>
      <h2 className='title-table'>{props.title} </h2>
      <div className='row'> 
        {
          isRobot ? roboticArray.map( elementArr => (
            <div className='col-md-3' key={elementArr.idproject}> 
              <Projectelem
                name = {elementArr.nameProject}
                folder = {folderName}
                idproject = {elementArr.idproject}
                urladdr = {elementArr.directProject}
                urlcode = {elementArr.urclcode}
              />
            </div>
            )): fullstackArray.map( elementArr => (
              <div className='col-md-3' key={elementArr.idproject}> 
                <Projectelem
                  name = {elementArr.nameProject}
                  folder = {folderName}
                  idproject = {elementArr.idproject}
                  urladdr = {elementArr.directProject}
                  urlcode = {elementArr.urclcode}
                />
              </div>
              ))
        }
      </div>
    </motion.div>
  );

}
export default Tableproject;