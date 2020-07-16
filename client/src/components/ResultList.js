import React from 'react'

const ResultList = ({items}) => {

  console.log("results list being called");
  console.log("------------------------");
  return items.map(item => <Card key={item.id} content={item}/>)
}

const Card = ({content}) => {
  console.log("calling Card");
  console.log("---------------");
  return <div>{content.itemName}
    <span>{content.storeName}</span>
    <span>{content.itemPrice}</span>
    <span>{content.itemDesc}</span>
  </div>
}

export default ResultList;