import React from 'react'
import style from '../style/card.module.css'
import { Redirect } from 'react-router-dom'

const Card = (({content, 
  updateList,
userState}) => {
  console.log("calling Card");
  console.log("---------------");

  const handleClick = () => {
    if (userState.authenticated) {
      updateList(content)
    } else {
      window.open("http://localhost:3000/login", "_self")
    }
  }

  return <div className={style.itemCard}>
            <img src={content.imgSource} className={style.itemImage}/>
            <span className={`${style[content.storeName]} ${style.storeName}`}>{content.storeName}</span>
            <span className={style.itemName}>{content.itemName}</span>
            <span className={style.itemPrice}>{content.itemPrice}</span>
            <span className={style.itemDesc}>{content.itemDesc}</span>
            <div className={`${style.addToFav} ${content.isAdded && style.added}`}
            onClick={handleClick}>fav</div>
          </div>
})

export default Card;