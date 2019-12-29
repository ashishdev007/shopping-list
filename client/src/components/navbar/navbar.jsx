import React, { Component } from "react";

import Register from "../../modals/Register.jsx";
import Hamburger from "./hamburger.jsx";
import "./navbar.css";
class navBar extends Component {
    state = { showRegister: false };
    render() {
        return (
            <React.Fragment>
                <div id="navbar" className="ui big inverted top fixed menu">
                    <div
                        id="hamburger-container"
                        className="item"
                        style={{ paddingRight: 0 }}
                    >
                        <Hamburger
                            click={this.props.hamburgerClickHandler}
                            showHamburger={this.props.showHamburger}
                        />
                    </div>
                    <div className="item">
                        <i
                            className="icon large shopping bag"
                            style={{ color: "white" }}
                        ></i>
                    </div>
                    <div className="spacer" style={{ flex: 1 }}></div>
                    <div id="navbar-nav_items" className="right menu">
                        <a
                            href="/"
                            className="right aligned item"
                            onClick={event => {
                                event.preventDefault();
                                this.setState({ showRegister: true });
                            }}
                        >
                            Sign-up
                        </a>
                    </div>
                </div>

                {this.state.showRegister ? <Register /> : null}
            </React.Fragment>
        );
    }
}

export default navBar;
