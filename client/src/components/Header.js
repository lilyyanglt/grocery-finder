import React from 'react'
import style from '../style/header.module.css'
import githubIcon from '../asset/github.svg'
import icon from '../asset/grocery_finder_icon.png'
import { Link } from 'react-router-dom'

const LOGOUT_URL = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_USER_API : process.env.REACT_APP_PROD_USER_API

function Header({userState}) {


  const handleSignOut = () => {
    window.open(`${LOGOUT_URL}/logout`, "_self");
  }

  return (
    <header className={style.header}>
      <div className={style.btns}>
          <a className={style.iconLink} href="https://github.com/lilyyanglt/grocery-search-engine/"><img className={style.icon} src={githubIcon} /></a>
          {userState.authenticated ? 
          <button className={style.signOutBtn}type="button" 
          onClick={handleSignOut}>Sign out</button> :
          <Link className={style.signInBtn} to="/login">Sign in</Link> 
          }
    
      </div>
      <img alt="icon" className={style.iconImage} src={icon} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#3273DC" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,117.3C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </header>
  )
}

export default Header;