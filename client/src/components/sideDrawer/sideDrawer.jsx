import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logout } from "../../actions/authActions";
import { connect } from "react-redux";

import "./sideDrawer.css";

class sideDrawer extends Component {
    getClass = () => {
        var className =
            "ui vertical inverted sidebar menu left overlay visible";
        if (this.props.show) {
            return className + " open";
        }
        return className;
    };
    render() {
        return (
            <div id="sidebar" className={this.getClass()}>
                <div className="items" style={{ marginTop: "2%" }}>
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
        );
    }
}

export default connect(null, { logout })(sideDrawer);
