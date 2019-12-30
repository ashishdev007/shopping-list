import React, { Component } from "react";
import "./Backdrop.css";

class BackDrop extends Component {
    render() {
        return (
            <div className="backdrop" onClick={this.props.BackDropClick}></div>
        );
    }
}

export default BackDrop;
