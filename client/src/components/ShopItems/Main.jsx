import React, { Component } from "react";
import { connect } from "react-redux";

import ShopItems from "./ShopItems.jsx";
import AddItem from "./AddItemForm.jsx";

class Main extends Component {
    state = { addItem: false };
    loginWarning = React.createRef();

    onDismiss = () => {
        this.setState({ addItem: false });
    };

    showAddForm = () => {
        return this.state.addItem ? (
            <AddItem onDismiss={this.onDismiss} />
        ) : null;
    };

    showWarning = () => {
        return (
            <div
                id="loginWarning"
                className="ui warning message"
                ref={this.loginWarning}
            >
                <i
                    className="close icon"
                    onClick={() => {
                        this.loginWarning.current.style.opacity = 0;
                        setTimeout(() => {
                            this.loginWarning.current.style.display = "none";
                        }, 180);
                    }}
                ></i>
                <h4 className="header">
                    You must login or register to edit this list!
                </h4>
            </div>
        );
    };

    render() {
        return (
            <div id="main" className="ui container">
                <div className="ui grid">
                    <div className="two wide column"></div>
                    <div className="twelve wide column">
                        {/* Header and Divider */}
                        <h1 className="ui center aligned header">List Items</h1>
                        <div className="ui center aligned divider"></div>

                        {!this.props.isAuthenticated
                            ? this.showWarning()
                            : null}

                        <ShopItems />

                        {/* Add Button */}
                        {this.props.isAuthenticated ? (
                            <button
                                id="addButton"
                                className="big circular teal ui icon button"
                                onClick={() => this.setState({ addItem: true })}
                            >
                                <i className="icon plus"></i>
                            </button>
                        ) : null}

                        {/* Show Modal? */}
                        {this.showAddForm()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps)(Main);
