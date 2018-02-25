import React from 'react';
import Shoe from './Shoe';

var shoes = [];

const ShoeList = (props) => {

   shoes = props.shoes.map((shoe) =>
    <Shoe key={shoe.id} shoe={shoe} onShoeSelect={props.handleShoeSelect} />
  )

  return (
    <ul>{shoes}</ul>
  );
};


ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;