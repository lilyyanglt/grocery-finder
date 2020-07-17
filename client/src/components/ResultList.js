import React from 'react'

const ResultList = ({items}) => {

  console.log("results list being called");
  console.log("------------------------");

  // sort by price when displaying the items

  items.sort((item1, item2) => {
    return Number(item1.itemPrice) > Number(item2.itemPrice) ? 1 : -1;
  })

  return (
    <div className="item-container">
    {items.map(item => <Card key={item.id} content={item}/>)}
    </div>
  )
}

const Card = React.memo(({content}) => {
  console.log("calling Card");
  console.log("---------------");

  return <div className="item-card">
    <span className="item-card__storeName">{content.storeName}</span>
    <span className="item-card__itemName">{content.itemName}</span>
    <span className="item-card__itemPrice">{content.itemPrice}</span>
    <span className="item-card__itemDesc">{content.itemDesc}</span>
  </div>
})

export default ResultList;