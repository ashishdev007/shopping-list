import React, { Component } from "react";

import ShopItems from "./ShopItems.jsx";
import AddItem from "../../modals/AddItem.jsx";

class Main extends Component {
    state = { addItem: false };

    onDismiss = () => {
        this.setState({ addItem: false });
    };

    showAddForm = () => {
        return this.state.addItem ? (
            <AddItem onDismiss={this.onDismiss} />
        ) : null;
    };

    render() {
        return (
            <div id="main" className="ui container">
                <div className="ui grid">
                    <div className="two wide column"></div>
                    <div className="twelve wide column">
                        {/* Header and Divider */}
                        <h1 className="ui center aligned header">List Items</h1>
                        <div class="ui center aligned divider"></div>

                        <ShopItems />

                        {/* Add Button */}
                        <button
                            id="addButton"
                            class="big circular teal ui icon button"
                            onClick={() => this.setState({ addItem: true })}
                        >
                            <i class="icon plus"></i>
                        </button>

                        {/* Show Modal? */}
                        {this.showAddForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
