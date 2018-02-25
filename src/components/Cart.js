import React from 'react';

var cart = [];
const Cart = (props) => {

    cart = props.cart;
    cart.map((shoe) => <li>
        <div className="row"><div className="col-12">{shoe.brand} - {shoe.name}</div></div>
        <div className="row"><div className="col-12">Price - R {shoe.price}</div></div>
        <div className="row"><div className="col-12">
            <button type="button" className="btn btn-danger" onClick={(e) =>onRemove(shoe.id)}>Remove</button>
        </div></div>

    </li>)

    return (
        cart
    )
};

CartSummary.propTypes = {
    cart: React.PropTypes.array.isRequired
};

export default CartSummary;