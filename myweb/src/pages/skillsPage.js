import React from "react";
import '../stylesheets/skills.css'
import {motion} from 'framer-motion' 
import Mosaicimages from "../components/mosaicSkills";

export function Skills(props){
    return(
        <div className="container">
            <div className="skills-container">
                <motion.div
                initial = {{
                    color:'#000'
                }} 
                animate = {{
                    y:100,
                    color:'#fff'
                }}
                transition = {{ease:"easeOut", duration: 3}}
                className="text-information">
                    <h1 align ='left'>My Skills and experience</h1>
                    <p align ='left'>
                        Loading ...
                    </p>    
                </motion.div>
                <div className="images-container">
                    <Mosaicimages 
                    folder='others'
                    idproject = '1'
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;