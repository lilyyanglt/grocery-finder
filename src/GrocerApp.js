import React from 'react';
import dataReducer from './util/reducer';
import {Header, InputWithLabel, ResultList} from './components/index';
import API from './api/googleSheet'
import useLocalStorage from './util/useLocalStorage';

function GrocerApp() {

  const [searchTerm, setSearchTerm] = useLocalStorage('search');

  const [data, dispatchData] = React.useReducer(dataReducer, {
    data: [],
    isLoading: false,
    isErrored: false
  });

  /** get data from api **/

  React.useEffect(() => {

    dispatchData({
      type: "FETCH_DATA_INIT"
    })

    fetch(API)
    .then(response => response.json())
    .then(results => {
      console.log(results);
      dispatchData({
        type: "DATA_FETCH_SUCCESS",
        payload: results
      })
    })
    .catch(error => {
      console.log(error)
      dispatchData({
        type: 'DATA_FETCH_FAILED'
      })
    })

  }, [])

  // this is the filtering functionality
  const filteredItems = data.data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

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
      {data.isErrored && <p>Something went wrong</p>}
      {data.isLoading ? <p>Loading...</p> : <ResultList items={filteredItems}/>}
    </div>
  )
}

export default GrocerApp;