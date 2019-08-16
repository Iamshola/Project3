import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'


import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'

import LocationsIndex from './components/locations/Index'
import New from './components/locations/New'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import TermsConditions from './components/pages/TermsConditions'

import './style.scss'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <SecureRoute path="/locations/new" component={New} />
          <Route path="/locations" component={LocationsIndex} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/termsconditions" component={TermsConditions} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
