import React from "react";
import ReactDOM from "react-dom";

const LoginModal = props => {
    return ReactDOM.createPortal(
        <div
            className="ui dimmer modals visible active"
            onClick={props.onDismiss}
        >
            <div
                className="ui tiny test visible modal transition active"
                onClick={event => event.stopPropagation()}
            >
                <div className="header">{props.header}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default LoginModal;
