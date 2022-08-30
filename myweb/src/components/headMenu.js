import React from "react";
import Button from 'react-bootstrap/Button';
import '../stylesheets/headMenu.css'
import {Router, Routes, Route, Link} from 'react-router-dom'



export function Headmenu(props){
    return(
        
        <div className='head-container'> 
            <Link to='/'>
                <div className="container">
                    <Button variant="outline-dark" size = 'sm' > About me </Button>{'  '}
                </div>
            </Link>
            <Link to='/skills'>
                <div className="container">
                    <Button variant="outline-dark" size = 'sm' > My Skills </Button>{'  '}
                </div>
            </Link>
            <Link to='/projects'>
                <div className="container">
                    <Button variant="outline-dark" size = 'sm' > Projects </Button>{'  '}
                </div>
            </Link>
            <Link to='/contactme'>
                <div className="container">
                    <Button variant="outline-dark" size = 'sm' > Contact me </Button>{'  '}
                </div>
            </Link>
            
        </div>
    );

}

export default Headmenu;