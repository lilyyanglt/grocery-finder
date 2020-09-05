import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return <div className="loginPage">
    <h2>Login with: </h2>
    <button type="button">Google</button>
    <Link to="/">Back</Link>
    <Link to="/register">Register</Link>
  </div>
}

export default Login