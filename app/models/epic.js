import _ from 'lodash'
import model from '../lib/model'
import { idGen } from '../utils'

const nextId = idGen()

export default model({
  reducers: {
    update: (state, { id, ...attrs }) => {
      const epic = _.first(_.remove(state.epics, { id }))
      return { ...state, epics: [ ...state.epics, { ...epic, ...attrs } ] }
    },
    add: (state, payload) => (
      { ...state, epics: _.concat(state.epics, { id: nextId(), ...payload, name: '' }) }
    ),
    delete: (state, { id }) => (
      { ...state, epics: _.reject(state.epics, { id }) }
    )
  },
  selectors: {
    byProject: (state, projectId) => _.chain(state.epics).filter({ project: projectId }).sortBy('id').value()
  },
  state: {
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
})
