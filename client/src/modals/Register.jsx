import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
import RegisterForm from "../components/auth/RegisterForm.jsx";

const LoginModal = props => {
    return ReactDOM.createPortal(
        <div
            className="ui dimmer modals visible active"
            onClick={() => history.push("/")}
        >
            <RegisterForm />
        </div>,
        document.querySelector("#addItem")
    );
};

export default LoginModal;
