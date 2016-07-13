import _ from 'lodash'
import epic    from './epic'
import feature from './feature'
import project from './project'
import ui      from './ui'

export const actions = Object.assign({}, epic.actions, feature.actions, project.actions, ui.actions)

export const selectors = Object.assign({},
  _.mapValues(epic.selectors, selector => (state, ...args) => selector(state['epic'], ...args)),
  _.mapValues(feature.selectors, selector => (state, ...args) => selector(state['feature'], ...args)),
  _.mapValues(project.selectors, selector => (state, ...args) => selector(state['project'], ...args)),
  _.mapValues(ui.selectors, selector => (state, ...args) => selector(state['ui'], ...args)),
)

export const reducers = {
  epic:    epic.reducer,
  feature: feature.reducer,
  project: project.reducer,
  ui:      ui.reducer
}
