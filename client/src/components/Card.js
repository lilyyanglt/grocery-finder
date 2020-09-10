import React from 'react'
import style from '../style/card.module.css'

const LOGIN_LINK = (process.env.NODE_ENV === 'development') ? "http://localhost:3000/login" : "https://grocery-finder.netlify.app/login";

const Card = (({
  content, 
  updateList,
  userState}) => {
    
  const handleClick = () => {
    
    if (userState.authenticated) {
      updateList(content)
    } else {
      window.open(LOGIN_LINK, "_self")
    }
  }

  return <div className={style.itemCard}>
            <img src={content.imgSource} className={style.itemImage}/>
            <span className={`${style[content.storeName]} ${style.storeName}`}>{content.storeName}</span>
            <span className={style.itemName}>{content.itemName}</span>
            <span className={style.itemPrice}>{content.itemPrice}</span>
            <span className={style.itemDesc}>{content.itemDesc}</span>
            <div className={`${style.addToFav} ${content.isAdded && style.added}`}
            onClick={handleClick}><span>Add</span></div>
          </div>
})

export default Card;