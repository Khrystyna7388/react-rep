import React from "react";

export const Card = (props) => {
   return <div>
        <h2>{props.name}</h2>
       <p>{props.text}</p>
    </div>
}
