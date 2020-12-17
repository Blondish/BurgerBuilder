import React from "react";
import classes from "./Toolbar.module.css"
import Logo from "../../../components/Logo/Logo"
import Navigationitems from './../NavigationItems/NavigationItems';
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle"

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
)

export default toolbar