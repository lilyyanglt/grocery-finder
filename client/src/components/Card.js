import React from 'react'
import style from '../style/card.module.css'

const Card = (({content}) => {
  console.log("calling Card");
  console.log("---------------");

  const [isAdded, setIsAdded] = React.useState(false);

  const add = () => {
    setIsAdded(!isAdded);
  }

  return <div className={style.itemCard}>
            <img src={content.imgSource} className={style.itemImage}/>
            <span className={`${style[content.storeName]} ${style.storeName}`}>{content.storeName}</span>
            <span className={style.itemName}>{content.itemName}</span>
            <span className={style.itemPrice}>{content.itemPrice}</span>
            <span className={style.itemDesc}>{content.itemDesc}</span>
            <div className={`${style.addToFav} ${isAdded && style.added}`}
            onClick={add}>fav</div>
          </div>
})

export default Card;