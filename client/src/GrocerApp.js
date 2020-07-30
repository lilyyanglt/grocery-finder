import React from 'react';
import dataReducer from './util/reducer';
import useLocalStorage from './util/useLocalStorage';
import {Header, SearchForm, ResultList} from './components/index';
import { dummyFetch } from './api/googleSheet'
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

  const fetchAPI = React.useCallback(() => {
    console.log("React useCallback called to create FetchAPI");
    console.log("---------------------------------------");
    dispatchData({
      type: "FETCH_DATA_INIT"
    })

  //   fetch('http://localhost:4000/api')
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log("Data fetched success");
  //     console.log(result);
  //     console.log('---------------------')
  //     dispatchData({
  //       type: 'DATA_FETCH_SUCCESS',
  //       payload: result
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     dispatchData({
  //       type: 'DATA_FETCH_FAILED'
  //     })
  //   })

    // ******* NOT USING ANY API BUT JUST USING TESTING DATA ******

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
      {data.isErrored && <p>Something went wrong</p>}
      {data.isLoading ? <p>Loading...</p> : <ResultList items={filteredData}/>}
    </div>
  )
}

export default GrocerApp;