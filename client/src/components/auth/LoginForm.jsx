import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../../actions/authActions";
import ModalForm from "../../modals/modalForm.jsx";
import history from "../../history";
import Loader from "../../modals/Loader";

class Login extends Component {
    state = {
        email: null,
        password: null
    };

    componentDidMount() {
        if (this.props.isAuthenticated) {
            history.push("/");
        }
    }

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            history.push("/");
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.login({ email, password });
    };

    handleInputChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    showError = () => {
        if (this.props.error.id === "LOGIN_FAIL") {
            return (
                <div class="ui error message">
                    <div class="header" style={{ textTransform: "capitalize" }}>
                        {this.props.error.msg}
                    </div>
                </div>
            );
        }

        return null;
    };

    content = () => {
        return (
            <React.Fragment>
                {this.showError()}
                <form className="ui big form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </React.Fragment>
        );
    };

    actions = () => {
        return (
            <div
                className="ui large teal right labeled icon button"
                onClick={this.onSubmit}
            >
                Submit
                <i className="checkmark icon"></i>
            </div>
        );
    };

    onDismiss = () => {
        history.push("/");
    };

    test = (
        <ModalForm
            onDismiss={this.onDismiss}
            header="Please Enter your Credentials"
            content={this.content()}
            actions={this.actions()}
        />
    );
    render() {
        if (this.props.isLoading) {
            return <Loader />;
        } else {
            return (
                <ModalForm
                    onDismiss={this.onDismiss}
                    header="Please Enter your Credentials"
                    content={this.content()}
                    actions={this.actions()}
                />
            );
        }
    }
}

const mapStateToProps = state => {
    const { isAuthenticated, isLoading } = state.auth;
    return { error: state.error, isAuthenticated, isLoading };
};

export default connect(mapStateToProps, { login })(Login);
