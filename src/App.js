import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Nav from "./components/Nav";
class App extends Component {
  state = {
    products: [
      {
        id: "1",
        name: "Item 1",
        price: "12.99",
        imageName: null
      },

      {
        id: "2",
        name: "Item 2",
        price: "19.99",
        imageName: null
      },
      {
        id: "3",
        name: "Item 3",
        price: "19.99",
        imageName: null
      },
      {
        id: "4",
        name: "Item 4",
        price: "79.99",
        imageName: null
      },
      {
        id: "5",
        name: "Item 5",
        price: "79.99",
        imageName: null
      },
      {
        id: "6",
        name: "Item 6",
        price: "79.99",
        imageName: null
      }
    ],

    myCart: []
  };

  handleAddToCart = id => {
    const product = this.state.products.filter(product => product.id === id);
    const myCart = product.concat(this.state.myCart);
    this.setState({ myCart: myCart });
  };
  handleRemove = id => {
    const myCart = this.state.myCart.filter(item => item.id !== id);
    this.setState({ myCart: myCart });
  };

  render() {
    const nav = <Nav itens={this.state.myCart} />;

    return (
      <HashRouter>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  {nav}
                  <Home
                    handleAddToCart={id => this.handleAddToCart(id)}
                    handleRemove={id => this.handleRemove(id)}
                    products={this.state.products}
                    myCart={this.state.myCart}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/mycart/"
              render={() => (
                <React.Fragment>
                  {nav}
                  <ShoppingCart
                    handleAddAnotherToCart={id =>
                      this.handleAddAnotherToCart(id)
                    }
                    handleRemove={id => this.handleRemove(id)}
                    myCart={this.state.myCart}
                    handleRemoveAll={() => this.setState({ myCart: [] })}
                  />
                </React.Fragment>
              )}
            />
            <Route
              component={() => (
                <h2 style={{ margin: " 50px" }}>
                  Sorry, we can't found this page!
                </h2>
              )}
            />
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
