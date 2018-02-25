import React, {Component} from 'react';
import NavBar from './components/NavBar';
import ShoeList from './components/ShoeList';
import Cart from './components/CartSummary';
import Facet from './components/Facet';
import Api from './api';

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

        this.setState({shoes: shoes, cart: shoes});
      });
  }

  handleShoeSelect(shoe) {

    this.state.cart.push(shoe);
    this.setState({cart: this.state.cart})
  }

  handleFacetSelect(e)
  {
    this.state.facetSelected = e.target.value;
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
            <Cart cart={this.state.cart}/>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
