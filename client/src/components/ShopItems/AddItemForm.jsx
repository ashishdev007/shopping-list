import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/itemsActions";
import "./AddItemForm.css";

class AddItemForm extends Component {
    state = {
        item: null,
        error: false
    };

    onSubmit = event => {
        event.preventDefault();
        if (!this.state.item) {
            this.setState({ error: true });
        } else {
            this.props.addItem(this.state.item);
            this.props.onDismiss();
        }
    };

    handleInputChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;

        if (value === "") {
            this.setState({ error: true });
        } else {
            this.setState({ item: value, error: false });
        }
    };

    errorClass = () => {
        if (this.state.error) {
            return "field error";
        }

        return "field";
    };

    buttonClass = () => {
        if (this.state.error) {
            return "ui large teal right labeled icon button disabled";
        }
        return "ui large teal right labeled icon button";
    };

    showWarning = () => {
        if (this.state.error) {
            return (
                <div className="ui up pointing red basic label">
                    Please enter an item!
                </div>
            );
        }
    };
    render() {
        return (
            <div
                className="ui tiny test visible modal transition active"
                onClick={event => event.stopPropagation()}
            >
                <div className="header">Please Enter an Item</div>
                <div className="content">
                    <form
                        className="ui big form"
                        onSubmit={this.onSubmit}
                        style={{ textAlign: "right" }}
                    >
                        <div className={this.errorClass()}>
                            <input
                                type="text"
                                name="item"
                                onChange={this.handleInputChange}
                            />
                            {this.showWarning()}
                        </div>
                        <button className={this.buttonClass()} type="submit">
                            Submit
                            <i className="checkmark icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { addItem })(AddItemForm);
