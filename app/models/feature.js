import _ from 'lodash'
import model from '../lib/model'
import { idGen } from '../utils'

const nextId = idGen()

export default model({
  reducers: {
    update: (state, { id, ...attrs }) => {
      const feature = _.first(_.remove(state.features, { id }))
      return { ...state, features: [ ...state.features, { ...feature, ...attrs } ] }
    },
    add: (state, payload) => ({
      ...state,
      features: _.concat(state.features, { id: nextId(), ...payload, name: '', score: 0 })
    }),
    delete: (state, { id } ) => ({
      ...state,
      features: _.reject(state.features, { id })
    })
  },
  selectors: {
    byEpic: (state, epicId) => _.chain(state.features).filter({ epic: epicId }).sortBy('id').value()
  },
  state: {
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
})
