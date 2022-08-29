import React from "react";
import Tableproject from "../components/tableProjects";

export function Projectpage(props){
    return(
        <div className="container" >
            <div className="row">
                <Tableproject
                title='Robotics Projects'
                />
            </div>
            <div className="row">
                <Tableproject
                title='Software Developer Projects'
                />
            </div>
        </div>

    );

}

export default Projectpage;