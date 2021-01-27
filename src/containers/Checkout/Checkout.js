import React, { Component } from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={() => this.props.history.goBack()}
                    checkoutContinue={() => this.props.history.replace("/checkout/contact-data")} />
            </div>
        )
    }

}

export default Checkout