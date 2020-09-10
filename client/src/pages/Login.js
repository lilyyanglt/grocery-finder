import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/login.module.css'

const LOGIN_URL = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_USER_API : process.env.REACT_APP_PROD_USER_API

function Login() {

  const handleLogin = () => {
    window.open(`${LOGIN_URL}/auth/google`, "_self")
  }

  return <div className={styles.loginSection}>
    <p>You need to sign in first before you can add favorites to your shopping list.</p>
    <h3>Login or Sign-up with: </h3>
    <button type="button" className={styles.googleBtn}
    onClick={handleLogin}>Google</button>
    <Link to="/">Back</Link>

  </div>
}

export default Login