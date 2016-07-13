import _ from 'lodash'
import { createAction, createReducer } from 'redux-act'
import { idGen } from '../utils'

const nextId = idGen()

export const actions = {
  addFeature:    createAction('add feature'),
  updateFeature: createAction('update feature'),
  deleteFeature: createAction('delete feature')
}

export const selectors = {
  featuresForEpic: (state, epicId) => _
    .chain(state.features)
    .filter({ epic: epicId })
    .sortBy('id')
    .value()
}

const initialState = {
  features: [
    {
      id: nextId(),
      project: 1,
      epic: 1,
      name: 'Log In',
      score: 10,
    },
    {
      id: nextId(),
      project: 1,
      epic: 1,
      name: 'Log Out',
      score: 10,
    },
    {
      id: nextId(),
      project: 1,
      epic: 1,
      name: 'Sign Up',
      score: 12,
    },
    {
      id: nextId(),
      project: 1,
      epic: 2,
      name: 'Receive Safe',
      score: 0,
    },
    {
      id: nextId(),
      project: 1,
      epic: 2,
      name: 'Receive Setup Instructions',
      score: 0,
    },
    {
      id: nextId(),
      project: 1,
      epic: 2,
      name: 'Confirm Safe Connection',
      score: 0,
    },
    {
      id: nextId(),
      project: 1,
      epic: 3,
      name: 'View Total Cash Balance',
      score: 0,
    },
    {
      id: nextId(),
      project: 1,
      epic: 3,
      name: 'View Cash Balance By Location',
      score: 0,
    },
    {
      id: nextId(),
      project: 1,
      epic: 3,
      name: 'View Cash Balance By Safe',
      score: 0,
    }
  ]
}

export const reducer = createReducer({
  [actions.updateFeature]: (state, { id, ...attrs }) => {
    const feature = _.first(_.remove(state.features, { id }))
    return { ...state, features: [ ...state.features, { ...feature, ...attrs } ] }
  },
  [actions.addFeature]: (state, payload) => ({
    ...state,
    features: _.concat(state.features, { id: nextId(), ...payload, name: '', score: 0 })
  }),
  [actions.deleteFeature]: (state, { id } ) => ({
    ...state,
    features: _.reject(state.features, { id })
  })
}, initialState)

export default {
  actions, initialState, reducer, selectors
}
