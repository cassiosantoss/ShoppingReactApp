import React, { Component } from "react";

class Product extends Component {
  state = {};

  render() {
    const Button = this.props.inCart ? (
      <button
        onClick={() => this.props.handleRemove()}
        className="btn btn-default"
      >
        Remove
      </button>
    ) : (
      <button
        onClick={() => this.props.handleAddToCart()}
        className="btn btn-default"
      >
        Add to cart
      </button>
    );

    return (
      <React.Fragment>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="product">
            <div className="product-image">
              <strong>{this.props.imageName}</strong>
            </div>
            <div className="product-name">
              <h4>{this.props.name}</h4>
            </div>
            <div className="product-price">
              <strong style={{ color: "green" }}>${this.props.price}</strong>
            </div>
            {Button}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
