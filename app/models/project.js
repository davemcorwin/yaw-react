import model from '../lib/model'

import { idGen } from '../utils'

const nextId = idGen()

export default model({
  namespace: 'project',
  state: {
    projects: [
      {
        id: nextId(),
        slug: 'cashup',
        name: 'CashUp',
        stage: 'scoping'
      },
      {
        id: nextId(),
        slug: 'wilson',
        name: 'Wilson',
        stage: 'scoping'
      }
    ],
  },
  selectors: {
    all: state => state.projects
  }
})
