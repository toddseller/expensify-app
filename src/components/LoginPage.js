import React from 'react'
import { connect } from 'react-redux'

import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>It's time to get your expenses under control.</p>
      <div className="login-button">

        <button className="login-button__button" onClick={ startLogin }><img src="/images/btn_google_light_normal_ios.svg" className="login-button__image"/><span className="login-button__text">Login with Google</span></button>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)