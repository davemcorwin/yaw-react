import React from 'react'
import { Provider } from 'react-redux'
import { IndexRedirect, Router, Route } from 'react-router'

import AppLayout from './components/AppLayout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'
import Scoping from './components/Scoping'

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRedirect to="dashboard/scoping" />
        <Route path="dashboard/:stage" component={Dashboard}/>
        <Route path="projects/:project" component={Project}>
          <IndexRedirect to="scoping" />
          <Route path=":stage(/:epic)" component={Scoping}/>
        </Route>
      </Route>
    </Router>
  </Provider>
)
