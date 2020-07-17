import React from 'react';

const SearchForm = (
  {id,
    type="text",
    value, 
    onInputChange
  }) => {
    console.log("Search form component called");
    console.log("----------------------");
  return (
    <div className="search-container">
      <label className="search__label" htmlFor={id}>Search: </label>
      <input className="search__input" id={id}
        type={type}
        value={value}
        onChange={(e) => {onInputChange(e)}}
      />
    </div>
    )
  }

export default SearchForm;