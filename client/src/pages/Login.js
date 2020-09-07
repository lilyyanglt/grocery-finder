import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/login.module.css'

function Login() {

  const handleLogin = () => {
    window.open("http://localhost:4000/user/auth/google", "_self")
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