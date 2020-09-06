import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  return <div className="loginPage">
    <h2>Login or Sign-up with: </h2>
    <span>Google</span>
    <Link to="/">Back</Link>

    <p>why sign in? You need to sign in first before you can add items to your favorites which is going to become your shopping list</p>
  </div>
}

export default Login