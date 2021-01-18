import React, { Component } from "react"
import Modal from './../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axiosinstance) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axiosinstance.interceptors.request.use(request => {
                this.setState({ error: null })
                return request
            })
            this.resInterceptor = axiosinstance.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        componentWillUnmount() {
            console.log("willUnmount")
            axiosinstance.interceptors.request.eject(this.reqInterceptor);
            axiosinstance.interceptors.response.eject(this.resInterceptor)
        }
        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )

        }
    }
}

export default withErrorHandler