import React from 'react';
import style from '../style/item.module.css';
import noResultStyle from '../style/noResult.module.css';
import noResultImg from '../asset/noResult.png';

const ResultList = ({items, term}) => {

  console.log("results list being called");
  console.log("------------------------");

  // sort by price when displaying the items

  items.sort((item1, item2) => {
    return Number(item1.itemPrice) > Number(item2.itemPrice) ? 1 : -1;
  })

  return (
    <div className={style.itemContainer}>
    {items.length ?
    <>
    {items.map(item => <Card key={item._id} content={item}/>)}
    </> 
    :
    <NoResult term={term}/>
    }
    </div>
  )
}

const Card = React.memo(({content}) => {
  console.log("calling Card");
  console.log("---------------");

  return <div className={style.itemCard}>
    <img src={content.imgSource} className={style.itemImage}/>
    <span className={`${style[content.storeName]} ${style.storeName}`}>{content.storeName}</span>
    <span className={style.itemName}>{content.itemName}</span>
    <span className={style.itemPrice}>{content.itemPrice}</span>
    <span className={style.itemDesc}>{content.itemDesc}</span>
  </div>
})

const NoResult = ({term}) => {
  return (
    <div className={`loading ${noResultStyle.noResult}`}>
      <p className={noResultStyle.text}><span className={noResultStyle.searchTerm}>"{term}"</span> has no result, but here's a pretty image for you </p>
      <img src={noResultImg}/>
    </div>
  )
}

export default ResultList;