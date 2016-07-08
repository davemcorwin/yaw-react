import _ from 'lodash'
import model from '../lib/model'
import { idGen } from '../utils'

const nextId = idGen()

export default model({
  namespace: 'epic',
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
  },
  reducers: {
    update: (state, { payload: { id, ...attrs } }) => {
      const epic = _.remove(state.epics, { id: id })[0]
      return { ...state, epics: [ ...state.epics, { ...epic, ...attrs } ] }
    },
    add: (state, { payload }) => (
      { ...state, epics: _.concat(state.epics, { id: nextId(), ...payload, name: '' }) }
    ),
    delete: (state, { payload: { id } }) => (
      { ...state, epics: _.reject(state.epics, { id: id }) }
    )
  },
  selectors: {
    byProject: (state, projectId) => _.chain(state.epics).filter({ project: projectId }).sortBy('id').value()
  }
})
