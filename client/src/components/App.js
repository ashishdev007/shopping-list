import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";

import history from "../history";
import Navbar from "./navigation/navbar/navbar.jsx";
import Sidebar from "./navigation/sideDrawer/sideDrawer.jsx";
import BackDrop from "./navigation/Backdrop/Backdrop.jsx";

import Main from "./ShopItems/Main.jsx";
import Register from "./auth/RegisterForm.jsx";
import Login from "./auth/LoginForm.jsx";

import "./App.css";

class App extends Component {
    state = { sideDrawerOpen: false };

    componentDidMount() {
        this.props.loadUser();
    }

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
                <Router history={history}>
                    <Navbar
                        hamburgerClickHandler={this.toggleSideDraw}
                        showHamburger={!this.state.sideDrawerOpen}
                    />
                    <Sidebar show={this.state.sideDrawerOpen} />

                    {this.getBackDrop()}

                    <Route path="/" component={Main} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </Router>
            </main>
        );
    }
}

export default connect(null, { loadUser })(App);
