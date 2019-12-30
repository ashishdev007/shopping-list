import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/authActions";

class navLink extends Component {
    renderAuth = () => {
        if (!this.props.user) {
            return (
                <React.Fragment>
                    <Link to="/login" className="right aligned item">
                        Log-in
                    </Link>
                    <Link to="/register" className="right aligned item">
                        Sign-up
                    </Link>
                </React.Fragment>
            );
        } else {
            return (
                <Link
                    to="#"
                    className="right aligned item"
                    onClick={() => this.props.logout()}
                >
                    Log-out
                </Link>
            );
        }
    };
    render() {
        return <React.Fragment>{this.renderAuth()}</React.Fragment>;
    }
}

const mapStateToProps = state => {
    return { user: state.auth.user };
};

export default connect(mapStateToProps, { logout })(navLink);
