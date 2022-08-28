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
          <button className='button-code'> Code </button>
          <button className='button-video'> Video </button>
        </div>
      </div>
    </div>        
  );

}

export default Projectelem;