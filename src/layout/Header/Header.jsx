import React from "react";
import { HeaderContaner } from "./HeaderStyle";
import Logo from "../../componentes/Logo/Logo";
import TextHeader from "../../componentes/TextHeader/TextHeader";
import Button from "../../componentes/Buttons/Button";
import TextCenter from "../../componentes/TextCenter/TextCenter.jsx";


export default function Header() {
    return (
        <HeaderContaner>
            <Logo />
            <TextHeader />
            <Button />
            <TextCenter
                title={'Keep track of your snippets'}
                text={'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'}
            />
        </HeaderContaner>

    )
}
