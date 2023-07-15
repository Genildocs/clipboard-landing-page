import React from "react";
import { HeaderContaner } from "./HeaderStyle";
import Logo from "../../componentes/Logo/Logo";
import TextHeader from "../../componentes/TextHeader/TextHeader";
import Button from "../../componentes/Buttons/Button";

export default function Header() {
    return (
        <HeaderContaner>
            <Logo />
            <TextHeader />
            <Button />
        </HeaderContaner>           
       
    )
}
