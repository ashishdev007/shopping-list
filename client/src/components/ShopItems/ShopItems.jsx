import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../actions";

import "./ShopItems.css";

class ShopItems extends Component {
    renderItems = () => {
        var { items } = this.props;

        return items.map(item => {
            return (
                <div
                    key={item._id}
                    className="ui segment"
                    onClick={() => this.props.deleteItem(item._id)}
                >
                    {item.name}
                </div>
            );
        });
    };

    render() {
        return (
            <div className="itemsContainer">
                <div className="content">
                    <h1 className="ui header">This is some content.</h1>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { items: Object.values(state.items) };
};

export default connect(mapStateToProps, { deleteItem })(ShopItems);
