import React from 'react';
import dataReducer from './util/reducer';
import {Header, SearchForm, ResultList} from './components/index';
import { dummyFetch } from './api/googleSheet'
import useLocalStorage from './util/useLocalStorage';

function GrocerApp() {
  console.log("Grocery App called");
  console.log("-------------------");

  const [searchTerm, setSearchTerm] = useLocalStorage('search', 'melon');

  const [data, dispatchData] = React.useReducer(dataReducer, {
    data: [],
    isLoading: false,
    isErrored: false
  });

  /** using React.useCallback hook */

  const fetchAPI = React.useCallback(() => {
    console.log("React useCallback called to create FetchAPI");
    console.log("---------------------------------------");
    dispatchData({
      type: "FETCH_DATA_INIT"
    })

    // replace this dummyfetch with the following when ready:
    /*
    * fetch(API).then(response => response.json()).then(results...)
    *
    */

    dummyFetch()
    .then(results => {
      console.log("Data fetched success");
      console.log("---------------------")
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

  /** get data from api **/

  React.useEffect(() => {
    console.log("fetching data in React.UseEffect");
    console.log("--------------------------------");
    fetchAPI();
  }, [])

  
  const handleSearch = (e) => {
    console.log("Handle Search Called");
    console.log("--------------------");
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <Header />
      <SearchForm
        id="search"
        value={searchTerm} 
        onInputChange={handleSearch}
      />
      <hr />
      {data.isErrored && <p>Something went wrong</p>}
      {data.isLoading ? <p>Loading...</p> : <ResultList items={data.data.filter(item => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()))}/>}
    </div>
  )
}

export default GrocerApp;