import React, { Component } from "react";

import NavLinks from "../navLinks.jsx";
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
                    <NavLinks />
                </div>
            </div>
        );
    }
}

export default sideDrawer;
