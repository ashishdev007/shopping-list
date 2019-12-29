import React from "react";
import ReactDOM from "react-dom";
import RegisterForm from "../components/auth/RegisterForm.jsx";

const LoginModal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <RegisterForm />
        </div>,
        document.querySelector("#addItem")
    );
};

export default LoginModal;
