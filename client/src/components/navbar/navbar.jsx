import React, { Component } from "react";
import { Link } from "react-router-dom";

import Hamburger from "./hamburger.jsx";
import { logout } from "../../actions/authActions";
import { connect } from "react-redux";
import "./navbar.css";
class navBar extends Component {
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
                        <Link to="/login" className="right aligned item">
                            Log-in
                        </Link>
                        <Link to="/register" className="right aligned item">
                            Sign-up
                        </Link>
                        <Link
                            to="#"
                            className="right aligned item"
                            onClick={() => this.props.logout()}
                        >
                            Log-out
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { logout })(navBar);
