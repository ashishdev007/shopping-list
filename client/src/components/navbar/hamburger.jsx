import React, { Component } from "react";

class hamburger extends Component {
    // getStyle = () => {
    //     if (this.props.showHamburger) {
    //         return { display: "block" };
    //     }

    //     return { display: "none" };
    // };
    getClass = () => {
        var className = "ui large content icon";
        if (this.props.showHamburger) {
            return className + " show";
        }
        return className + " hide";
    };
    render() {
        return (
            <i
                id="hamburger"
                className={this.getClass()}
                onClick={this.props.click}
            ></i>
        );
    }
}

export default hamburger;
