import React from 'react';
import '../stylesheets/projectId.css'

export function Projectelem(props){
  return(
    <div className='brick-container'>
      <div className='image-container'>
        <img className='image-project'
              src =  {require(`../images/${props.folder}/project${props.idproject}.png`)}
              alt = 'Image from project'
        />
      </div>
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