import React from "react";
import { useParams } from "react-router-dom";

export function Userpage(props){
    
    const params = useParams();
    console.log(params);

    return(
    <h1>
        {params.id}
    </h1>);
}

export default Userpage;