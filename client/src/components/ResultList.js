import React from 'react';
import Card from './Card';
import style from '../style/resultList.module.css';
import noResultStyle from '../style/noResult.module.css';
import noResultImg from '../asset/noResult.png';

const ResultList = ({items, 
  term,
isErrored,
updateList,
userState}) => {

  // TODO: add sorting function here

  return (
    <div className={style.itemContainer}>
    {items.length ?
    <>
    {items.map(item => <Card key={item._id} 
    content={item} 
    updateList={updateList}
    userState={userState}/>)}
    </> 
    :
    <NoResult isErrored={isErrored} term={term}/>
    }
    </div>
  )
}

const NoResult = ({term, isErrored}) => {
  return (
    <div className={`${noResultStyle.noResult} ${isErrored && noResultStyle.noshow}`}>
      <p className={noResultStyle.text}>
        <span className={noResultStyle.searchTerm}>"{term}"</span> 
        has no result, but here's a pretty image for you </p>
      <img src={noResultImg}/>
    </div>
  )
}

export default ResultList;