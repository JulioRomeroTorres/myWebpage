import React from "react";
import Tableproject from "../components/tableProjects";

export function Projectpage(props){
    return(
        <div className="container" >
            
            <div className="row">
                <Tableproject
                title='Robotics Projects'
                folder='robotics'
                />
            </div>
            <div className="row">
                <Tableproject
                title='Software Developer Projects'
                folder='developer'
                />
            </div>
        </div>

    );

}

export default Projectpage;