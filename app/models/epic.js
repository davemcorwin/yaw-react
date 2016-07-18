import _ from 'lodash'
import { createAction, createReducer } from 'redux-act'
import { idGen } from '../utils'

const nextId = idGen()

export const actions = {
  addEpic:    createAction('add epic'),
  updateEpic: createAction('update epic'),
  deleteEpic: createAction('delete epic')
}

export const selectors = {
  epicsForProject: (state, projectId) => _
    .chain(state.epics)
    .filter({ project: projectId })
    .sortBy('id')
    .value(),
  epicBySlug: (state, slug) => _.find(state.epics, { slug })
}

export const initialState = {
  epics: [
    {
      id: nextId(),
      project: 1,
      name: 'User Management',
      slug: 'user-management'
    },
    {
      id: nextId(),
      project: 1,
      name: 'Onboarding',
      slug: 'onboarding'
    },
    {
      id: nextId(),
      project: 1,
      name: 'Dashboard',
      slug: 'dashboard'
    }
  ]
}

export const reducer = createReducer({
  [actions.updateEpic]: (state, { id, ...attrs }) => {
    const epic = _.first(_.remove(state.epics, { id }))
    return { ...state, epics: [ ...state.epics, { ...epic, ...attrs } ] }
  },
  [actions.addEpic]: (state, payload) => (
    { ...state, epics: _.concat(state.epics, { id: nextId(), ...payload, slug: _.kebabCase(payload.name)}) }
  ),
  [actions.deleteEpic]: (state, { id }) => (
    { ...state, epics: _.reject(state.epics, { id }) }
  )
}, initialState)

export default {
  actions, initialState, reducer, selectors
}
