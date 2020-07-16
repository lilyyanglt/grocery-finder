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
    <div>
      <label htmlFor={id}>Search: </label>
      <input id={id}
        type={type}
        value={value}
        onChange={(e) => {onInputChange(e)}}
      />
    </div>
    )
  }

export default SearchForm;