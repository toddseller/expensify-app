import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard&nbsp;&nbsp;</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense&nbsp;&nbsp;</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense&nbsp;&nbsp;</NavLink>
  </header>
);

export default Header;