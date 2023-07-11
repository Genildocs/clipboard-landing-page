import React from "react";
import Logo from "../componentes/Logo";
import Button from "../componentes/Button";
import SectionText from "../componentes/SectionText";

export default function Header() {
    return (
        <div className="header">            
            <div>
                <Logo />
                <div className="text">
                    <h1 className="title">A history of everything you copy</h1>
                    <p className="paragraph">
                        Clipboard allows you to track and organize everything you copy.
                        Instantly access your clipboard on all your devices.
                    </p>
                </div>
                <Button />
                <SectionText title={'Keep track of your snippets'} text={'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'} />
            </div>
        </div>
    );
}
