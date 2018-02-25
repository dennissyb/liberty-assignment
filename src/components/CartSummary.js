import React from 'react';

var cart = [];
const CartSummary = (props) => {

  cart = props.cart;
  var total = 0;
  cart.map((shoe) => total += shoe.price)

  return (
    <div className="CartSummary">
      <h5>My Cart</h5>
      <div className="row">
        <div className="col-12">
          <label>Total Items :
          </label>
          <span id="ItemCount">{cart.length}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label>Total Cost :
          </label>
          <span id="TotalCost">R {total.toFixed(2)}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-clear" onClick={onViewCart()}>View Cart</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-clear" onClick={onCheckout()}>Checkout</button>
        </div>
      </div>

    </div>
  )
};

function onCheckout() {
  console.log("Checked out");

}

function onViewCart() {
  console.log("Checked out");

}

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired,
  onCheckout: React.PropTypes.func,
  onViewCart: React.PropTypes.func

};

export default CartSummary;