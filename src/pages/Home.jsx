import React, { Component } from "react";

import Product from "../components/Product";

class Home extends Component {
  state = {
    products: this.props.products,
    productsFromSearch: []
  };
  componentWillMount() {
    this.setState({ productsFromSearch: this.state.products });
    return this.handleInput;
  }
  handleInput = e => {
    e.preventDefault();
    const inputValue = this.refs.input.value.toUpperCase();
    const products = this.state.products.filter(
      p => p.name.toUpperCase().search(inputValue) > -1
    );
    this.setState({ productsFromSearch: products });
  };
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <div className="row">
            <div className="container">
              <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3  col-lg-6 col-lg-offset-3">
                <form onSubmit={e => this.handleInput(e)}>
                  <div className="input-group">
                    <input
                      ref="input"
                      onChange={this.handleInput}
                      type="text"
                      className="form-control input-lg"
                      placeholder="Search item 1, item 2 ..."
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-lg btn-default" type="submit">
                        <i className="glyphicon glyphicon-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                <hr />
                {this.state.productsFromSearch.map(product => (
                  <Product
                    key={product.id}
                    name={product.name}
                    imageName={product.imageName}
                    price={product.price}
                    inCart={
                      this.props.myCart.filter(item => item.id === product.id)
                        .length > 0
                        ? true
                        : false
                    }
                    handleAddToCart={() =>
                      this.props.handleAddToCart(product.id)
                    }
                    handleRemove={() => this.props.handleRemove(product.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="well text-center">
          Powerd by{" "}
          <a href="" title="">
            CSS
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
