import React from 'react';
import { LandingPage, Login } from './pages'
import { Header, Footer } from './components'
import { Route, Switch } from 'react-router-dom'
import dataReducer from './util/reducer'
import fetchData from './util/api.js';
import fetchDataTest from './test/testApi';

function App() {

  const [data, dispatchData] = React.useReducer(dataReducer, {
    data: [],
    isLoading: false,
    isErrored: false
  });

  /** using React.useCallback hook */

  const fetchAPI = React.useCallback(async() => {
    // let url = (process.env.REACT_APP_NODE_ENV === 'development') ? process.env.REACT_APP_DEVELOPMENT_API : process.env.REACT_APP_DATA_API;
    // console.log(url);
    // fetchData(dispatchData, url);
    
    /** ENABLE THIS FOR DATA TESTING WITHOUT GOING TO ACTUAL API */
    fetchDataTest(dispatchData);

  }, [])

    /** get data from api **/

    React.useEffect(() => {
      console.log("fetching data in React.UseEffect");
      console.log("--------------------------------");
      fetchAPI();
    }, [fetchAPI])
  

  return (<>
    <Header />
    <Switch>
      <Route exact path="/"><LandingPage data={data} /></Route>
      <Route exact path="/login"><Login /></Route>
    </Switch>
    <Footer />
    </>
  )
}

export default App