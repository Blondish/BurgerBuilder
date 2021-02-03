import React, { Component } from 'react';
import Button from './../../components/UI/Button/Button';
import classes from "./ContactData.module.css"
import axiosinstance from "../../axios-orders"
import Spinner from './../../components/UI/Spinner/Spinner';


class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            customer: {
                name: "Olena",
                address: {
                    street: "MyStreet 11",
                    city: "MyCity",
                    country: "Spain"
                },
                email: "olena@hotmail.com"
            },
            deliveryMethod: "fastest"
        }

        axiosinstance.post("/orders.json", order)
            .then(response =>
                this.setState({ loading: false }),
                this.props.history.push("/"))
            .catch(error => this.setState({ loading: false }))
    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
            <input className={classes.Input} type="text" name="postalCode" placeholder="Your Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>)
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData