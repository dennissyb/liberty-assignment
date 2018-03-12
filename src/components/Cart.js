import React from 'react';
var cart = [];
const Cart = (props) => {

    cart = props.cart.map((shoe) => <li>
        <div className="row">
            <div className="col-12">{shoe.brand}
                - {shoe.name}</div>
        </div>
        <div className="row">
            <div className="col-12">Price - R {shoe.price}</div>
        </div>
        <div className="row">
            <div className="col-12">
                <button type="button" className="btn btn-danger">Remove</button>
            </div>
        </div>

    </li>)

    return (
        <div>{cart}</div>
    )
};

Cart.propTypes = {
    cart: React.PropTypes.array.isRequired
};

export default Cart;