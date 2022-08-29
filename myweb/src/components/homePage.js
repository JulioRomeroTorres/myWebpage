import React, {useRef, useEffect} from "react";
import '../stylesheets/homePage.css'
import { Route, Routes } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion'
//const Home = () : Element => <h1>Hola mundo</h1>


export function Homepage(props){
    return(
        <div className='container d-flex justify-content-center align-items-center h-100 '>  
            <div className="md-col-2">
                <motion.h1 
                animate={{
                    y: 200,
                    color: '#fff' 
                }} 
                transition={{ ease: "easeOut", duration: 3 }}
                className="title-head" align ='left'> Hi, </motion.h1>
                <motion.h1 animate={{
                    y: 200,
                    color: '#fff' 
                }} 
                transition={{ ease: "easeOut", duration: 3 }}
                className="title-head" align ='left'>I'm Julio Cesar Romero Torres </motion.h1>
                <motion.p animate={{
                    y: 200,
                    color: '#fff' 
                }} 
                transition={{ ease: "easeOut", duration: 3 }}
                className="text-head" align ='left'>
                    Outstanding mechatronics engineering graduate with two years of experience developing hardware and software to
                    build robotic solutions based on embedded systems. Solid knowledge of programming, robotics, embedded systems,
                    Linux systems, networks, electronics and mechanics. Enthusiastic software developer and data analyst eager to learn
                    new technologies and apply them to optimize processes in various industries. Strong leadership competences, proven
                    teamwork skills and communications skills. Advanced level of English
                </motion.p>
            </div>
            
            
        </div>
    );
}

export default Homepage;