import React from "react";
import ImagePC from "../../assets/images/image-computer.png";
import {Wrapper, Image} from "../SOne/SectionStyle.jsx"
import TreeStyle from "../SOne/Section.jsx";


export default function ImageComputer(){

    return(
        <Wrapper>
            <Image src={ImagePC} alt="imagem de um computador" />
            <div>
                <TreeStyle />
            </div>
        </Wrapper>

    )
}