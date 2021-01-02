import React, { Component } from "react"
import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer"

class Layout extends Component {
    state = {
        sideDrawerShow: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ sideDrawerShow: false })
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerShow: !prevState.sideDrawerShow }
        })
    }


    render() {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.drawerToggleHandler} />
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

