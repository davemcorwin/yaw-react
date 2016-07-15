import _ from 'lodash'
import { createAction, createReducer } from 'redux-act'
import { modeled } from 'react-redux-form'
import { idGen } from '../utils'

const nextId = idGen()

export const actions = {
  addProject:    createAction('add project'),
  updateProject: createAction('update project'),
  deleteProject: createAction('delete project'),
  submitProjectForm: createAction('submit project form')
}

export const selectors = {
  allProjects: state => state.projects,
  projectBySlug: (state, slug) => _.find(state.projects, { slug }),
  projectsForStage: (state, stage) => _.filter(state.projects, { stage })
}

export const initialState = {
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

export const reducer = modeled(createReducer({
  [actions.updateProject]: (state, { id, ...attrs }) => {
    const project = _.first(_.remove(state.projects, { id }))
    return { ...state, projects: [ ...state.projects, { ...project, ...attrs } ] }
  },
  [actions.addProject]: (state, payload) => (
    { ...state, projects: _.concat(state.projects, { id: nextId(), name: '', ...payload, stage: 'scoping' }) }
  ),
  [actions.deleteProject]: (state, { id }) => (
    { ...state, projects: _.reject(state.projects, { id }) }
  ),
  [actions.submitProjectForm]: (state) => {
    console.log('Project Submitted!')
    return state
  }
}, initialState), 'project')

export default {
  actions, initialState, reducer, selectors
}
