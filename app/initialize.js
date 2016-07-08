import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { IndexRedirect, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { modelsToReducers } from './lib/model'
import * as models from './models'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Project from './components/Project'
import Scoping from './components/Scoping'

const store = createStore(
  combineReducers({
    ...modelsToReducers(models),
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <IndexRedirect to="dashboard/scoping" />
          <Route path="dashboard/:stage" component={Dashboard}/>
          <Route path="projects/:project" component={Project}>
            <IndexRedirect to="scoping" />
            <Route path=":stage(/:epic)" component={Scoping}/>
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load)
} else {
  load()
}
