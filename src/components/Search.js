import React from 'react';

const Search = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search "type="text"
      onChange={(e) => {props.onSearch(e)}}
    />
  </div>
)

export default Search;