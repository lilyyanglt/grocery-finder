import React from 'react';
import dataReducer from './util/reducer';
import useLocalStorage from './util/useLocalStorage';
import {
  Header, 
  SearchForm, 
  ResultList, 
  Footer,
  LoadingError } from './components/index';
import ReactLoading from 'react-loading';
import fetchData from './util/api.js';
import fetchDataTest from './test/testApi';
import './style/main.css'

function GrocerApp() {
  console.log("Grocery App called");
  console.log("-------------------");

  const [searchTerm, setSearchTerm] = useLocalStorage('search', '');

  const [data, dispatchData] = React.useReducer(dataReducer, {
    data: [],
    isLoading: false,
    isErrored: false
  });

  /** using React.useCallback hook */

  const fetchAPI = React.useCallback(async() => {
    fetchData(dispatchData);
    
    /** ENABLE THIS FOR DATA TESTING WITHOUT GOING TO ACTUAL API */
    // fetchDataTest(dispatchData);

  }, [])

  /** get data from api **/

  React.useEffect(() => {
    console.log("fetching data in React.UseEffect");
    console.log("--------------------------------");
    fetchAPI();
  }, [fetchAPI])

  
  const handleSearch = (e) => {
    console.log("Handle Search Called");
    console.log("--------------------");
    setSearchTerm(e.target.value);
  }

  const filteredData = data.data.filter(item => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (

    <div className="main-container">
      <Header />
      <SearchForm
        id="search"
        value={searchTerm} 
        onInputChange={handleSearch}
      />
      {data.isErrored && <LoadingError />}
      {data.isLoading 
      ? <ReactLoading className="loading" type="spinningBubbles" color="#0ABDA0" height={100} width={50} />
      : <ResultList isErrored={data.isErrored} term={searchTerm} items={filteredData}/>}
      <Footer />
    </div>
  )
}

export default GrocerApp;