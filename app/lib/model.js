import _ from 'lodash'
import { assignAll, createAction, createReducer } from 'redux-act'

export default (config={}) => {

  const actions = _.mapValues(config.reducers, (_v, key) => createAction(key))
  const reducerObj = _.mapKeys(config.reducers, (_v, key) => actions[key])

  return {
    ...config,
    reducer: createReducer(reducerObj, config.state),
    actions
  }
}

export const applyModels =
  models => createStore => (reducer, preloadedState, enhancer) => {

    // Create the store
    const store = createStore(reducer, preloadedState, enhancer)

    // Map model actions and selectors
    const actions = mapModelActions(models)

    // Add namespaced actions to the dispatch function
    const dispatch = Object.assign(store.dispatch, actions)

    // Assign all action creators to the store
    assignAll(actions, store)

    // Return 'enhanced' store
    return {
      ...store,
      dispatch
    }
  }

export const select = () => mapModelSelectors

export const mapModelReducers  = models => _.mapValues(models, model => model.reducer)
export const mapModelActions   = models => _.mapValues(models, model => model.actions)
export const mapModelSelectors = models => _.mapValues(models, model => model.selectors)
