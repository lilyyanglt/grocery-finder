import React from 'react';
import { LandingPage, Login } from './pages'
import { Header, Footer } from './components'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (<>
    <Header />
    <Switch>
      <Route exact path="/"><LandingPage /></Route>
      <Route exact path="/login"><Login /></Route>
    </Switch>
    <Footer />
    </>
  )
}

export default App