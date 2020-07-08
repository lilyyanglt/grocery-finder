import React from 'react';
import {Header, Search, ResultList} from './components/index';

function GrocerApp() {
  
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const data = [
    { id: 0,
      name: "Melon"},
    { id: 1,
      name: "Soya Sauce"}
  ];

  const handleSearch = (e) => {
    console.log(searchTerm);
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch}/>
      <hr />
      <ResultList items={data}/>
    </div>
  )
}

export default GrocerApp;