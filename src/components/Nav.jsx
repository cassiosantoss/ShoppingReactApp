import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    const itens = this.props.itens;
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-fixed-top">
          <Link className="navbar-brand" to="/">
            CompanyLogo
          </Link>

          <p className="navbar-text pull-right">
            <Link to="/mycart/">
              <span className="counter">{itens.length}</span>
              <span className="glyphicon glyphicon-shopping-cart" />
            </Link>
          </p>
        </nav>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Nav;
