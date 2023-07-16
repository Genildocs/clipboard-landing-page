import React from "react";
import {WrapperCards, Title, Text} from "./CardsStyles.jsx";
import ImgBlacklist from "../../assets/images/icon-blacklist.svg";

function Cards({title, text}){
    return(
        <WrapperCards>
            <img src={ImgBlacklist}/>
            <Title>{title}</Title>
            <Text> {text}</Text>
        </WrapperCards>

    )
}

export default Cards