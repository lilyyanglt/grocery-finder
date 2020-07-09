import React from 'react';
import {Header, Search, ResultList} from './components/index';

function GrocerApp() {
  
  console.log(localStorage);

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
      <Search term={searchTerm} onSearch={handleSearch}/>
      <hr />
      <ResultList items={filteredItems}/>
    </div>
  )
}

export default GrocerApp;