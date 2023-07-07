import React from "react"
import Logotipo from "../assets/images/logo.svg"
import '../scripts/main.scss'


export default function Logo(){
    
    return(
        
       <div className="logo">      
            <img src={Logotipo} alt="logotipo " />
       </div>
    )
}