import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { assignAll } from 'redux-act'

import { mapModelActions, mapModelReducers } from './lib/model'

import devTools from './dev-tools'
import * as models from './models'

const store = createStore(
  combineReducers({
    ...mapModelReducers(models),
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory)),
    devTools()
  )
)

assignAll(mapModelActions(models), store)

export default store
