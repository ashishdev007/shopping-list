import React, { Component } from "react";
import { connect } from "react-redux";

import { register } from "../../actions/authActions";

class Login extends Component {
    state = {
        name: null,
        email: null,
        password: null
    };

    onSubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        this.props.register({ name, email, password });
    };

    handleInputChange = event => {
        console.log("trigger");
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    showError = () => {
        if (this.props.error.id === "REGISTER_FAIL") {
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

    render() {
        console.log(this.state);
        return (
            <div
                className="ui tiny test visible modal transition active"
                onClick={event => event.stopPropagation()}
            >
                <div className="header">Please Enter your Info</div>
                <div className="content">
                    {this.showError()}
                    <form className="ui big form" onSubmit={this.onSubmit}>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleInputChange}
                            />
                        </div>
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
                </div>
                <div className="actions">
                    <div
                        className="ui large teal right labeled icon button"
                        onClick={this.onSubmit}
                    >
                        Submit
                        <i className="checkmark icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { error: state.error };
};

export default connect(mapStateToProps, { register })(Login);
