import React from "react";
import ReactDOM from "react-dom";
import AddItemForm from "../components/ShopItems/AddItemForm.jsx";

const Modal = props => {
    return ReactDOM.createPortal(
        <div
            className="ui dimmer modals visible active"
            onClick={props.onDismiss}
        >
            <AddItemForm />
        </div>,
        document.querySelector("#addItem")
    );
};

export default Modal;
