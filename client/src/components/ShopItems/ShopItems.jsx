import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems, deleteItem } from "../../actions/itemsActions";

import "./ShopItems.css";
import Loader from "../../modals/Loader";

class ShopItems extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    moveOver = event => {
        event.currentTarget.children[1].style.transform = "translateX(6.25%)";
    };

    moveBack = event => {
        event.currentTarget.children[1].style.transform = "translateX(0)";
    };

    editableItems = () => {
        var { items } = this.props;
        return items.map(item => {
            return (
                <div
                    key={item._id}
                    className="ui segment item grid"
                    onMouseEnter={this.moveOver}
                    onMouseLeave={this.moveBack}
                >
                    <div
                        className="one wide column trashIconContainer"
                        onClick={() => this.props.deleteItem(item._id)}
                    >
                        <i className="trash icon"></i>
                    </div>

                    <div className=" sixteen wide column itemName">
                        {item.name}
                    </div>
                </div>
            );
        });
    };

    noneditableItems = () => {
        var { items } = this.props;
        return items.map(item => {
            return (
                <div key={item._id} className="ui segment">
                    <p>{item.name}</p>
                </div>
            );
        });
    };

    render() {
        if (this.props.loadingItems) {
            return <Loader />;
        }
        return (
            <div className="itemsContainer">
                <div className="content">
                    {this.props.isAuthenticated ? (
                        this.editableItems()
                    ) : (
                        <div id="noneditableList" className="ui piled segments">
                            {this.noneditableItems()}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: Object.values(state.items.values),
        loadingItems: state.items.loading,
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps, { fetchItems, deleteItem })(ShopItems);
