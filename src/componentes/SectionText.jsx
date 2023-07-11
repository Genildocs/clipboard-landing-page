import React from "react";

function SectionText({title, text}){

    return (

        <div className="container">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

    )
}

export default SectionText;