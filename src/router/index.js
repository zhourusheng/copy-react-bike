import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'

import Login from '../views/login'
import Layout from '../views/layout'

import Home from '../views/home'

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' render={() => 
              <Layout>
                <Switch>
                  <Route path='/home' component={Home} />
                  <Redirect to="/home" />
                </Switch>
              </Layout>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}

export default Router

