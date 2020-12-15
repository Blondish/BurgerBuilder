import React from "react";
import classes from "./Toolbar.module.css"
import Logo from "../../../components/Logo/Logo"

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>...</nav>
    </header>
)

export default toolbar