import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return <div className="register">
    <h2>Register with: </h2>
    <button type="button">Google</button>
    <Link to="/login">Or login</Link>
    <Link to="/">Home</Link>
  </div>
}

export default Register