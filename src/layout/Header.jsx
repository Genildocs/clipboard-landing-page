import React from "react";
import Logo from "../componentes/Logo";
import Button from "../componentes/Button";
import BG from "../assets/images/bg-header-desktop.png";

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
            </div>
        </div>
    );
}
