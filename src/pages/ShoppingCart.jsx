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
                        <div className="col-xs-12  col-sm-12 col-md-8 col-md-offset-2 col-lg-8">
                            <h3>
                                My shopping
                                <div className="pull-right">
                                    <small className="">Total: {total}</small>
                                </div>
                                <hr />
                            </h3>

                            {this.props.myCart.length > 0 ? (
                                <div>
                                    {this.props.myCart.map((item, k) => {
                                        return (
                                            <div
                                                key={k}
                                                className="panel panel-default"
                                            >
                                                <div className=" panel-body">
                                                    <b>{item.name}</b>
                                                    <br />
                                                    Price: {item.price}
                                                </div>

                                                <button
                                                    style={{
                                                        margin: "0px 10px"
                                                    }}
                                                    className="btn btn-default"
                                                    onClick={() =>
                                                        this.props.handleRemove(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        );
                                    })}

                                    <button
                                        style={{ float: "right" }}
                                        className="btn btn-lg btn-success"
                                    >
                                        Finish
                                    </button>
                                </div>
                            ) : (
                                <div className="alert alert-info">
                                    Empty cart!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ShoppingCart;
