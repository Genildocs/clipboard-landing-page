import React from "react";
import { Wrapper } from "./ButtonStyle";
import '../../Sass/main.scss';

export default function Button(){

    return(
        <Wrapper>
            <button className="button is-primary is-rounded">Download for iOS</button>
            <button className="button is-link is-rounded">Download for Mac</button>
        </Wrapper>
    )
}