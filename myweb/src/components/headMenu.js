import React from "react";
import '../stylesheets/headMenu.css'
import { Route, Routes } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//const Home = () : Element => <h1>Hola mundo</h1>


export function Headmenu(props){
    return(
        <div className='head-container'>  
            <button>
                About Me
            </button>
            <button>
                Projects
            </button>
            <button>
                Contact me
            </button>
            <h1>Hi, Mi name is Julio Cesar Romero Torres </h1>
            <h3> It is my first time as FullStack Developer</h3>
            <div className='image-container'>
                <img src = {require(`../images/others/personalPhoto.png`)} alt = 'My personal photo' />
            </div>
            
        </div>
    );
}

export default Headmenu;