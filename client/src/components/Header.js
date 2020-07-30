import React from 'react';
import style from '../style/header.module.css';
import githubIcon from '../asset/github.svg';

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.appName}>Grocery Finder</h1>
      <div>
        <p className={style.note}>Made with ❤️ by Lily Yang</p>
        <a href="https://github.com/lilyyanglt/grocery-search-engine/"><img src={githubIcon} className={style.icon}/></a>
      </div>
    </header>
  )
}

export default Header;