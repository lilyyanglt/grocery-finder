import React from 'react'
import style from '../style/header.module.css'
import githubIcon from '../asset/github.svg'
import { Link } from 'react-router-dom'


function Header() {
 
  return (
    <header className={style.header}>
      <h1 className={style.appName}>Grocery Finder</h1>
      <div>
        <ul>
          <Link to="/login">Sign in</Link>
        </ul>
      </div>
      <a className={style.iconLink} href="https://github.com/lilyyanglt/grocery-search-engine/"><img className={style.icon} src={githubIcon} /></a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#3CDFD5" fillOpacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,117.3C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </header>
  )
}

export default Header;