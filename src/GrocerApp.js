import React from 'react';
import {Header, InputWithLabel, ResultList} from './components/index';
import useLocalStorage from './util/useLocalStorage'

function GrocerApp() {

  const [searchTerm, setSearchTerm] = useLocalStorage('search');

  const data = [
    { id: 0,
      name: "Melon"},
    { id: 1,
      name: "Soya Sauce"}
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  
  }

  const filteredItems = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Header />
      <InputWithLabel
        id="search"
        value={searchTerm} 
        onInputChange={handleSearch}>
      Search
      </InputWithLabel>
      <hr />
      <ResultList items={filteredItems}/>
    </div>
  )
}

export default GrocerApp;