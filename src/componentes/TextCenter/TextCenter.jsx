import React from "react";
import {Title, Text, Wrapper} from "./TextCenterStyle.jsx";

export default function TextCenter({title, text}){

    return(
        <Wrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Wrapper>
    )
}