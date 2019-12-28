import React, { Component } from "react";

import Navbar from "./navbar/navbar.jsx";
import Sidebar from "./sideDrawer/sideDrawer.jsx";
import BackDrop from "./Backdrop/Backdrop.jsx";
import ShopItems from "./ShopItems/ShopItems.jsx";
import AddItem from "../modals/AddItem.jsx";
import "./App.css";

class App extends Component {
    state = { sideDrawerOpen: false, addItem: false };

    toggleSideDraw = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    BackDropClick = () => {
        this.setState({ sideDrawerOpen: false });
    };

    getBackDrop = () => {
        if (this.state.sideDrawerOpen) {
            return (
                <React.Fragment>
                    <BackDrop BackDropClick={this.BackDropClick} />
                </React.Fragment>
            );
        }

        return null;
    };

    showAddForm = () => {
        return this.state.addItem ? (
            <AddItem onDismiss={this.onDismiss} />
        ) : null;
    };

    onDismiss = () => {
        this.setState({ addItem: false });
    };

    render() {
        return (
            <main>
                <Navbar
                    hamburgerClickHandler={this.toggleSideDraw}
                    showHamburger={!this.state.sideDrawerOpen}
                />
                <Sidebar show={this.state.sideDrawerOpen} />

                {this.getBackDrop()}

                <div id="main" className="ui container">
                    <div className="ui grid">
                        <div className="two wide column"></div>
                        <div className="twelve wide column">
                            {/* Header and Divider */}
                            <h1 className="ui center aligned header">
                                List Items
                            </h1>
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
            </main>
        );
    }
}

export default App;
