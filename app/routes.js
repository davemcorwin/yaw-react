import React from 'react'
import { Provider } from 'react-redux'
import { IndexRedirect, Router, Route } from 'react-router'

import {
  AppLayout,
  Dashboard,
  Planning,
  Project,
  Scoping
} from './views'

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRedirect to="dashboard/scoping" />
        <Route path="dashboard/:stage" component={Dashboard}/>
        <Route path="projects/:project" component={Project}>
          <IndexRedirect to="scoping" />
          <Route path="scoping(/:epic)" component={Scoping}/>
          <Route path="planning(/:epic)" component={Planning}/>
        </Route>
      </Route>
    </Router>
  </Provider>
)
