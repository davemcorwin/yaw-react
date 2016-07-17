import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { reducers } from './models'
import routes from './routes'

const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

const load = () => ReactDOM.render(routes(history, store), document.getElementById('app'))

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load)
} else {
  load()
}
