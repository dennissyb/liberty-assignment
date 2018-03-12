import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => {

  var items = props.cart;

  return (

    <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio">
          <label>
            <input type="radio" value="Nike" onClick={(e) => onFacetSelect(e)}  />
            Nike
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Reebok" onClick={(e) => onFacetSelect(e)}/>
            Reebok
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Adidas" onClick={(e) => onFacetSelect(e)}/>
            Adidas
          </label>
        </div>
      </form>

    </div>

  </div>
    // <div className="row">
    //   <div>
    //     Filter by Brand :
    //     <input
    //       type="text"
    //       onChange={(e) =>
    //       onFacetSelect(items,e)}
    //       />
    //   </div>

    // </div>
  )
};

function onFacetSelect(items, e) {
  var test = countByKey(items, e.target.value)
}

function compare(a, b) {
  if (a.count < b.count) 
    return -1;
  if (a.count > b.count) 
    return 1;
  return 0;
}
Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;