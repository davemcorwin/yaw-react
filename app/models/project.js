import _ from 'lodash'
import { createAction, createReducer } from 'redux-act'
import { idGen } from '../utils'

const nextId = idGen()

export const actions = {
  addProject:         createAction('add project'),
  updateProject:      createAction('update project'),
  deleteProject:      createAction('delete project'),
  submitProjectForm:  createAction('submit project form'),
  addProjectPhase:    createAction('add project phase'),
  deleteProjectPhase: createAction('delete project phase'),
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
      stage: 'scoping',
      phases: []
    },
    {
      id: nextId(),
      slug: 'wilson',
      name: 'Wilson',
      stage: 'scoping',
      phases: []
    }
  ]
}

export const reducer = createReducer({

  [actions.updateProject]: (state, { id, ...attrs }) => {
    const project = _.first(_.remove(state.projects, { id }))
    return { ...state, projects: [ ...state.projects, { ...project, ...attrs } ] }
  },

  [actions.addProject]: (state, payload) => ({
    ...state,
    projects: _.concat(state.projects, { id: nextId(), name: '', ...payload, slug: _.kebabCase(payload.name), stage: 'scoping', phases: [] })
  }),

  [actions.deleteProject]: (state, { id }) => ({
    ...state,
    projects: _.reject(state.projects, { id })
  }),

  [actions.addProjectPhase]: (state, { id, phase }) => {
    const project = _.find(state.projects, { id: id })
    const newProject = { ...project, phases: [ ...project.phases, phase ] }
    return {
      ...state,
      projects: [ ..._.reject(state.projects, { id: id }), newProject ]
    }
  },

  [actions.deleteProjectPhase]: (state, { id, phase }) => {
    const project = _.find(state.projects, { id: id })
    const newProject = { ...project, phases: _.without(project.phases, phase) }
    return {
      ...state,
      projects: [ ..._.reject(state.projects, { id: id }), newProject ]
    }
  },
}, initialState)

export default {
  actions, initialState, reducer, selectors
}
