import React from "react";
//import '../stylesheets/headMenu.css'

export function Headmenu(props){
    return(
        <div className="head-container">  
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
            <img src = {require(`../images/others/personalPhoto.png`)} alt = 'My personal photo' />
        </div>
    );
}

export default Headmenu;