import React from "react";
import classes from "./BuildControls.module.css"
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" }
]

const BuildControls = (props) => {
    return <div className={classes.BuildControls}>

        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((control) => {
            return <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.addedIngredient(control.type)}
                removed={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]} />
        })}
        <button
            className={classes.OrderButton}
            disabled={props.price <= 4}
        >ORDER NOW</button>
    </div>
}

export default BuildControls