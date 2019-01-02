import { NavLink } from 'react-router-dom'
import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: true
    }
  }

  render() {
    return (
      <div>
        { this.state.isAuthenticated &&
          <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard&nbsp;&nbsp;</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense&nbsp;&nbsp;</NavLink>
          </header>
        }
      </div>
    )
  }
}