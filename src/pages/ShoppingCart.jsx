import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {
    myCart: this.props.myCart
  };

  render() {
    const prices = this.props.myCart.map(i => parseFloat(i.price));
    const total = prices.length
      ? prices.reduce((total, occ) => total + occ).toFixed(2)
      : "0.00";

    return (
      <React.Fragment>
        <div className="main">
          <div className="container">
            <div className="row" style={{ marginRight: "50px" }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>
                  <small>My shopping cart</small>
                  <small className="total pull-right">Total: $ {total}</small>
                </h2>

                <hr />

                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                  {this.props.myCart.map((item, k) => {
                    return (
                      <div key={k} className="panel panel-default">
                        <div className="panel-body">
                          <div>
                            <h3 className="product-name">{item.name}</h3>
                          </div>
                          <div className="pull-right item-change-amount">
                            {/* <span
                              className="glyphicon glyphicon-minus"
                              aria-hidden="true"
                            />
                            <input
                              className="amount"
                              defaultValue={item.count}
                              type="text"
                              min="0"
                            />
                            <span
                              onClick={() =>
                                this.props.handleAddAnotherToCart(item.id)
                              }
                              className="glyphicon glyphicon-plus"
                              aria-hidden="true"
                            /> */}

                            <button
                              style={{ marginLeft: " 25px" }}
                              className="btn btn-sm pull-right btn-default"
                              onClick={() => this.props.handleRemove(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="panel panel-default">
                    <div className="panel-body">
                      <button
                        type="button"
                        className="btn-sm pull-right btn btn-success"
                      >
                        Finished
                      </button>
                      <button
                        onClick={() => this.props.handleRemoveAll()}
                        className=" pull-right btn btn-danger btn-sm"
                      >
                        Remove all
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
