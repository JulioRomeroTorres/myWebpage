import React from 'react';
import '../stylesheets/projectId.css'
import {motion} from 'framer-motion'

export function Projectelem(props){
  return(
    <div className='col-md-3'>
      <motion.div 
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.8 }}
      className='image-container'>
        <img className='image-project'
              src =  {require(`../images/${props.folder}/project${props.idproject}.png`)}
              alt = 'Image from project'
        />
      </motion.div>
      <div className='text-container'>
        <p> {props.name} </p>
        <div className='buttons-cotainer'> 
          <a href='https://github.com/JulioRomeroTorres?tab=repositories'>
            <button className='button-code'> Code </button>
          </a>
          <a href = 'https://github.com/JulioRomeroTorres?tab=repositories'>
            <button className='button-video'> Video </button>
          </a>
          
        </div>
      </div>
    </div>        
  );

}

export default Projectelem;