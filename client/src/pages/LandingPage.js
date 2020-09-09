import React from 'react';
import useLocalStorage from '../util/useLocalStorage';
import {
  SearchForm, 
  ResultList, 
  LoadingError } from '../components/index';
import ReactLoading from 'react-loading';
import dataReducer from '../util/dataReducer'
import { fetchData } from '../util/api.js';
import fetchDataTest from '../test/testApi'
import '../style/main.css'

const SERVER_API = (process.env.REACT_APP_NODE_ENV === 'development') ? process.env.REACT_APP_DEV_DATA_API : process.env.REACT_APP_PROD_DATA_API;


function LandingPage({  
  userState,
  updateList
}) {

    const [searchTerm, setSearchTerm] = useLocalStorage('search', '');

    const [dbData, dispatchData] = React.useReducer(dataReducer, {
      data: [],
      isLoading: false,
      isErrored: false
    });

    /** get data from api **/

    React.useEffect(() => {
      fetchData(dispatchData, SERVER_API);
    }, [])
  

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    }

    /* purpose of this section is to update the filtered data based on 
       what's in the user's shopping list so that before it gets displayed to the user, the items in the user's list will be marked with an added flag
    */

    // let filterData = updateDataResult(dbData.data, userState, searchTerm);

    let filteredData = dbData.data.filter(item => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));

    if (userState.authenticated) {
      for (let item of filteredData) {
        if (item.isAdded == true) item.isAdded = false
        for (let userItem of userState.shoppingList) {
            if (item._id === userItem) {
              item.isAdded = true
            } 
          }
        }
    }

  return (

    <div className="main-container">
      <SearchForm
        id="search"
        value={searchTerm} 
        onInputChange={handleSearch}
      />
      {dbData.isErrored && <LoadingError />}
      {dbData.isLoading 
      ? <ReactLoading className="loading" type="spinningBubbles" color="#3CDFD5" height={100} width={50} />
      : <ResultList 
        userState={userState}
        isErrored={dbData.isErrored} 
        term={searchTerm} 
        items={filteredData}
        updateList={updateList}/>
      }
    </div>
  )
}

export default LandingPage;