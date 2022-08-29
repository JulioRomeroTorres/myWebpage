import React from "react";
import Button from 'react-bootstrap/Button';
import '../stylesheets/headMenu.css'
import {Router, Routes, Route, Link} from 'react-router-dom'



export function Headmenu(props){
    return(
        
        <div className='head-container'> 
            <Link to='/'>
                <Button variant="outline-dark" size = 'sm' >About me</Button>{'  '}
            </Link>
            <Link to='/skills'>
                <Button variant="outline-dark" size = 'sm' > My Skills  </Button> {'  '}
            </Link>
            <Link to='/projects'>
                <Button variant="outline-dark" size = 'sm' >Projects</Button> {'  '}
            </Link>
            <Link to='/contactme'>
                <Button variant="outline-dark" size = 'sm' >Contact me</Button> {'  '}
            </Link>
            
        </div>
    );

}

export default Headmenu;