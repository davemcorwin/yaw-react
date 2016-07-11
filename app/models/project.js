import model from '../lib/model'

import { idGen } from '../utils'

const nextId = idGen()

export default model({
  selectors: {
    all: state => state.projects,
    bySlug: (state, slug) => _.find(state.projects, { slug }),
    byStage: (state, stage) => _.filter(state.projects, { stage })
  },
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
    ]
  }
})
