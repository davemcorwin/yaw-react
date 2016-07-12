import _ from 'lodash'
import { assignAll, createAction, createReducer } from 'redux-act'
import { connect as reduxConnect } from 'react-redux'

const _models = {}

export default (config={}) => {

  const actions = _.mapValues(config.reducers, (_v, key) => createAction(key))
  const reducerObj = _.mapKeys(config.reducers, (_v, key) => actions[key])

  const model = {
    ...config,
    reducer: createReducer(reducerObj, config.state),
    actions
  }

  _models.push(model)

  return model
}

export const connect = mapSelectToProps => {

  const select = state => _models.map(model =>
    _.mapValues(model.selectors, selector => selector.bind(null, state))
  )

  const mapStateToProps = (state, ownProps) => mapSelectToProps(select(state), ownProps)
  const mapDispatchToProps = dispatch => _models.map(model =>
    model.actions
  )

  return reduxConnect(mapStateToProps, mapDispatchToProps)
}

export const mapModelReducers  = models => _.mapValues(models, model => model.reducer)
export const mapModelActions   = models => _
  .chain(models)
  .values()
  .flatMapDeep(model => _.values(model.actions))
  .value()
