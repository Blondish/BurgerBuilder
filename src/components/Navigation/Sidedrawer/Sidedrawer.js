import React from "react";
import Logo from "../../../components/Logo/Logo";
import Navigationitems from './../NavigationItems/NavigationItems';
import Backdrop from "../../UI/Backdrop/Backdrop"
import classes from "./Sidedrawer.module.css"


const sidedrawer = (props) => {

    return (
        <>
            <Backdrop show={props.open} onClick={props.closed} />
            <div className={classes.Sidedrawer}>
                <Logo height="11%" />
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </>
    )
}

export default sidedrawer