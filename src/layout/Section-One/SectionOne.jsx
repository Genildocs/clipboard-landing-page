import React from "react";
import ImageComputer from "../../componentes/UserImages/ImageComputer.jsx";
import TextCenter from "../../componentes/TextCenter/TextCenter.jsx";
export default function SectionOne(){
    return(
        <>
            <ImageComputer />
            <TextCenter title={'Access Clipboard Anywhere'}
                        text={'Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.'}
            />
        </>
    )
}