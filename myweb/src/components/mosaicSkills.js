import React from "react";
import { motion } from "framer-motion";
import '../stylesheets/mosaicSkills.css'

const mosaicArray = [ 
    [
        { idproject: 1 },
        { idproject: 2 },
        { idproject: 3 },
        { idproject: 4}
    ],
    [
        { idproject: 0 },
        { idproject: 1 },
        { idproject: 2 },
        { idproject: 3}
    ]

];

export function Mosaicimages(props){
    return(
        <div className="mosaic-container">
            {
                mosaicArray[1].map( elementAux => ( 
                    <div className="row">
                    {
                        mosaicArray[0].map( elementArr => (
                            <motion.div 
                                animate = {{
                                    scale : [1, 1.2, 1],
                                    rotate : [0, 180, 0]
                                }}
                                transition = {{
                                    duration: 2,
                                    ease: 'easeOut',
                                    times: [0,0.5,1],
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                                className='col-md-3' key={elementArr.idproject + 4*elementAux.idproject}> 
                                    <img className='mosaic-element'
                                    src =  {require(`../images/${props.folder}/skill${elementArr.idproject + 4*elementAux.idproject}.png`)}
                                    alt = 'Image from project'
                                    />
                            </motion.div>))
                    }
                    </div> ))
                
            }
        </div>
    );
}

export default Mosaicimages;
