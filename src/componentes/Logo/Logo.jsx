import React from "react"
import Logotipo from "../../assets/images/logo.svg"
import {Image, ContainerImg} from "./LogoStyle";


export default function Logo(){
    
    return(
        
       <ContainerImg>      
            <Image src={Logotipo} alt="Logotipo" />
       </ContainerImg>
    )
}