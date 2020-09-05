import React from 'react';
import { LandingPage, Login, Register } from './pages'
import { Header, Footer } from './components'
import { Route } from 'react-router-dom'

// import LandingPage from './pages/LandingPage'


function App() {

  return (<>
    <Header />
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register}/>
    <Footer />
    </>
  )
}

export default App