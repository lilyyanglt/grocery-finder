import React from 'react';
import {Header, InputWithLabel, ResultList} from './components/index';

function GrocerApp() {

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'Melon'
  );

  const data = [
    { id: 0,
      name: "Melon"},
    { id: 1,
      name: "Soya Sauce"}
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    localStorage.setItem('search', e.target.value)
  }

  const filteredItems = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <Header />
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm} 
        onInputChange={handleSearch}/>
      <hr />
      <ResultList items={filteredItems}/>
    </div>
  )
}

export default GrocerApp;