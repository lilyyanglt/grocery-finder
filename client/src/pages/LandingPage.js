import React from 'react';
import useLocalStorage from '../util/useLocalStorage';
import {
  SearchForm, 
  ResultList, 
  LoadingError } from '../components/index';
import ReactLoading from 'react-loading';
import '../style/main.css'

function LandingPage({data}) {
  console.log("Grocery App called");
  console.log("-------------------");

  const [searchTerm, setSearchTerm] = useLocalStorage('search', '');


  const handleSearch = (e) => {
    console.log("Handle Search Called");
    console.log("--------------------");
    setSearchTerm(e.target.value);
  }

  const filteredData = data.data.filter(item => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (

    <div className="main-container">
      <SearchForm
        id="search"
        value={searchTerm} 
        onInputChange={handleSearch}
      />
      {data.isErrored && <LoadingError />}
      {data.isLoading 
      ? <ReactLoading className="loading" type="spinningBubbles" color="#3CDFD5" height={100} width={50} />
      : <ResultList 
        isErrored={data.isErrored} 
        term={searchTerm} 
        items={filteredData}/>
      }
    </div>
  )
}

export default LandingPage;