import React from 'react';

const Search = ({term, onSearch}) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search "type="text"
      value={term}
      onChange={(e) => {onSearch(e)}}
    />
  </div>
)

export default Search;