import React from "react";
import Logo from "../../../components/Logo/Logo";
import Navigationitems from './../NavigationItems/NavigationItems';
import Backdrop from "../../UI/Backdrop/Backdrop"
import classes from "./Sidedrawer.module.css"


const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open]
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%" />
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </>
    )
}

export default sidedrawer