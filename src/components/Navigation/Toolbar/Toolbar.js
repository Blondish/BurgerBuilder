import React from "react";
import classes from "./Toolbar.module.css"
import Logo from "../../../components/Logo/Logo"
import Navigationitems from './../NavigationItems/NavigationItems';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
)

export default toolbar