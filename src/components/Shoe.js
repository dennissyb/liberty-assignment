import React from 'react';


const Shoe = (props) => (

<li>
  <h5>{props.shoe.brand} > {props.shoe.name}</h5>
  <p>{props.shoe.price}</p>
  <button type="button" onClick={() => props.onShoeSelect(props.shoe)} className="btn btn-primary">Add to Cart</button>
  </li>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;