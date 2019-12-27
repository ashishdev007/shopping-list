import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../actions";

import "./ShopItems.css";

class ShopItems extends Component {
    moveOver = event => {
        event.currentTarget.children[1].style.transform = "translateX(6.25%)";
    };

    moveBack = event => {
        event.currentTarget.children[1].style.transform = "translateX(0)";
    };

    renderItems = () => {
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

// <div className="SingleItemContainer">
//             {/* <div className="trashIconContainer">
//                 <i className="trash icon"></i>
//             </div> */}
//             <div className="ui segment">
//                 <i className="trash icon"></i>
//             </div>
//             <div
//                 key={item._id}
//                 className="ui segment item"
//                 onClick={() => this.props.deleteItem(item._id)}
//             >
//                 {item.name}
//             </div>
//         </div>
