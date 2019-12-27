import React, { Component } from "react";

import Navbar from "./navbar/navbar.jsx";
import Sidebar from "./sideDrawer/sideDrawer.jsx";
import BackDrop from "./Backdrop/Backdrop.jsx";
import ShopItems from "./ShopItems/ShopItems.jsx";
import "./App.css";

class App extends Component {
    state = { sideDrawerOpen: false };

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
                            <ShopItems />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
