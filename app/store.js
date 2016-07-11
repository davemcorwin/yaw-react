import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import { applyModels, mapModelReducers } from './lib/model'

import devTools from './dev-tools'
import * as models from './models'

export default createStore(
  combineReducers({
    ...mapModelReducers(models),
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory)),
    applyModels(models),
    devTools()
  )
)
