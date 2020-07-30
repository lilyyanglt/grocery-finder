import React from 'react';
import style from '../style/search.module.css';

const SearchForm = (
  {id,
    type="text",
    value, 
    onInputChange
  }) => {
    console.log("Search form component called");
    console.log("----------------------");
  return (
    <div className={style.searchContainer}>
      <label className={style.searchLabel} htmlFor={id}>Search: </label>
      <input className={style.searchInput} 
        id={id}
        type={type}
        value={value}
        placeholder="find grocery item here..."
        onChange={(e) => {onInputChange(e)}}
      />
    </div>
    )
  }

export default SearchForm;