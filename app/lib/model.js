import _ from 'lodash'
import { handleActions } from 'redux-actions'

export default (config={}) => ({
  namespace: config.namespace,
  initialState: config.state,
  reducers: toReducers(config),
  selectors: toSelectors(config)
})

export const modelsToSelectors = models =>
  Object.assign({}, ..._
    .chain(models)
    .values()
    .map('selectors')
    .value()
  )

export const modelsToReducers = models => _.mapValues(models, 'reducers')

const toReducers = model => handleActions(_.mapKeys(model.reducers, (value, key) => `${model.namespace}:${key}`), model.state)

const toSelectors = model => _
  .chain(model.selectors)
  .mapKeys((value, key) => `${model.namespace}:${key}`)
  .mapValues(selector => (state, ...args) => selector(state[model.namespace], ...args))
  .value()
