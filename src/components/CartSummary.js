import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';

const CartSummary = (props) => {

  var cart = props.cart;
  var total = 0;
  cart.map((shoe) => total += shoe.price)

  return (
    <Router>
    
    <div className="CartSummary">
      <h5>My Cart</h5>
      <div className="row">
        <div className="col-12">
          <label>Total Items :
            <span id="ItemCount">{cart.length}</span>

          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label>Total Cost :
            <span id="TotalCost">R {total.toFixed(2)}</span>
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
            <Link to="/cart">
              <button type="button" className="btn btn-clear">View Cart</button>
            </Link>
            <Route path="/cart" component={Cart}/>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
            <Link to="checkout">
              <button type="button" className="btn btn-clear" onClick={onCheckout()}>Checkout</button>
            </Link>
            <Route path="/checkout" component={Checkout}/>

        </div>
      </div>

    </div>
        </Router>
        

  )
};

function onCheckout() {
  console.log("Checked out");
}

function onViewCart() {
  console.log("Viewing Cart");
}

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired,
  onCheckout: React.PropTypes.func,
  onViewCart: React.PropTypes.func
}

export default CartSummary;