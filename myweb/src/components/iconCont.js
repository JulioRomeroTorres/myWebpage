import React from "react";
import '../stylesheets/iconCont.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//color:rgb(255,0,0);

export function IconCont(props){
    return(
        <div>
            <a href={props.url} target='_blank' style = {{color: props.color }} >
                <div className="icon-container">
                    <FontAwesomeIcon 
                    icon= {props.icon}
                    size="1.5x"
                    />
                </div>
            </a>
        </div>
    );
} 
export default IconCont;