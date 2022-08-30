import React from 'react';
import '../stylesheets/projectId.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

export function Projectelem(props){
  return(
      <div className='container'>
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
          <p align='center'> {props.name} </p>
          <div className='buttons-cotainer'> 
            <a  href={props.urlcode} target='_blank'>
              <button className='button-code'> Code </button>
            </a>
            <Link to={props.urladdr}>
              <button className='button-video'> View Project </button>
            </Link>
          </div>
        </div>
      </div>        

  );

}

export default Projectelem;