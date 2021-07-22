import React, { Component } from 'react';
import storeContext from "../context/storeContext";
import "./cart.css"

class Cart extends Component {
    static contextType = storeContext;

    state = {};
    render() { 
        return (
            <div className="cart-page">
                <h4>This is the cart page</h4>
                <div className="product-container">{this.context.cart.map((prod) =>
                <ItemInCart></ItemInCart>
                )}</div>
            </div>

        );
    }
}
 
export default Cart;

/**
 * 
 *   1 - create a component (itemInCart)
 *   2 - map the cart array to the new component
 *   3 - pass the data as prop
 *   4 - in itemInCart read the and display the item info
 * 
 * 
 */