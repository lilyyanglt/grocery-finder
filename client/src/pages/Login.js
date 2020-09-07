import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/login.module.css'

function Login() {

  const handleLogin = () => {
    window.open("http://localhost:4000/user/auth/google", "_self")
  }

  return <div className={styles.loginSection}>
    <h2>Login or Sign-up with: </h2>
    <span className={styles.googleBtn}
    onClick={handleLogin}>Google</span>
    <Link to="/">Back</Link>

    <p>why sign in? You need to sign in first before you can add items to your favorites which is going to become your shopping list</p>
  </div>
}

export default Login