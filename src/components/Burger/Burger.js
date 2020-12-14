import React from "react";
import classes from "./Burger.module.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // we need to transform the object into array into order to map on it and get the value of each key pair

    let transformedIngregients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
            //now we need to see what is the length of the ingredient list, using reduce
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

    if (transformedIngregients.length === 0) {
        transformedIngregients = <p>Please add some ingredients</p>
    }



    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngregients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger