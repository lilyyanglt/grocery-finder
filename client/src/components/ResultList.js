import React from 'react'

const ResultList = ({items}) => {

  console.log("results list being called");
  console.log("------------------------");

  // sort by price when displaying the items

  items.sort((item1, item2) => {
    return Number(item1.itemPrice) > Number(item2.itemPrice) ? 1 : -1;
  })

  return items.map(item => <Card key={item.id} content={item}/>)
}

const Card = React.memo(({content}) => {
  console.log("calling Card");
  console.log("---------------");

  return <div className="item-card">
    <span>{content.storeName}</span>
    <span>{content.itemName}</span>
    <span>{content.itemPrice}</span>
    <span>{content.itemDesc}</span>
  </div>
})

export default ResultList;