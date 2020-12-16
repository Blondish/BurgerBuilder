import React, { Component } from "react"
import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer"

class Layout extends Component {
    state = {
        sideDrawerShow: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ sideDrawerShow: false })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <Sidedrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.sideDrawerShow} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>

        )
    }
}

export default Layout

