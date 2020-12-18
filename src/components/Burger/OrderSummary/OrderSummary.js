import React, { Component } from "react"
import Button from "../../UI/Button/Button"

class Order extends Component {
    //this could be a functional component
    componentWillUpdate() {
        console.log("updated CompWillUpdate")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{this.props.ingredients[igKey]}
                </li>
            })

        return (
            <>
                <h3>Your Order</h3>
                <p>Your Burger with delicious ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <h4>Total Price: {this.props.price.toFixed(2)}</h4>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </>
        )
    }

}

export default Order