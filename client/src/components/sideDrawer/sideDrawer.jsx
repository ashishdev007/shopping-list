import React, { Component } from "react";
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
                    <a href="/" className="big item">
                        Log-in
                    </a>
                </div>
            </div>
        );
    }
}

export default sideDrawer;
