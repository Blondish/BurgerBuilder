import React, { Component } from "react"
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    bacon: 1.6,
    meat: 2
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        console.log(this.state)
    }


    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) return
        const updatedCount = oldCount - 1

        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount

        const priceSubstruction = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice - priceSubstruction
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addedIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable} />
            </>
        )
    }
}

export default BurgerBuilder