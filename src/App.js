import React, {Component} from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
import Facet from './components/Facet';
import Api from './api';
import $ from 'jquery';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends Component {

  /**

   *  - this.state = {...}
   * */
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      cart: [],
      facetSelected: null
    };
    this.handleShoeSelect = this
      .handleShoeSelect
      .bind(this);

    this.handleFacetSelect = this
      .handleFacetSelect
      .bind(this);
  }

  /**
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    Api
      .getShoes()
      .then(data => {
        const shoes = data;

        this.setState({shoes: shoes, cart:[]});
      });
  }

  handleShoeSelect(shoe) {

    var foundShoe = $.grep(this.state.cart, function (e) {
      return (e.id == shoe.id)
    })[0];

    if (foundShoe != undefined) 
      return console.log("Shoe already added to cart");
    else {
      this.state.cart.push(shoe);
      this.setState({cart: this.state.cart});
      console.log("Shoe added successfully to cart");

    }
  }

  handleFacetSelect(event)
  {
    this.setState
    {
      facetSelected : event.target.value;
    }
  }

  render() {
    return (
      <div>

        <NavBar title="My App Store"/>
        <div className="row">

          <div className="col s3"></div>

          <div className="col s6">

            <Facet cart={this.state.cart} handleFacetSelect={this.handleFacetSelect}/>

            < ShoeList shoes={this.state.shoes} handleShoeSelect={this.handleShoeSelect}/>
          </div>

          <div className="col s3">
            <CartSummary cart={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
