import React from "react"
import Button from "../../UI/Button/Button"

const order = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{props.ingredients[igKey]}
            </li>
        })
    return <>
        <h3>Your Order</h3>
        <p>Your Burger with delicious ingredients: </p>
        <ul>
            {ingredientSummary}
        </ul>
        <h4>Total Price: {props.price.toFixed(2)}</h4>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </>
}

export default order