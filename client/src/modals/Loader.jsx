import React from "react";
import ReactDOM from "react-dom";

const Loader = props => {
    return ReactDOM.createPortal(
        <div class="ui active dimmer">
            <div class="ui loader"></div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Loader;
