import { createAction, createReducer } from 'redux-act'

export const actions = {
  uiHideSideDrawer:  createAction('hide side drawer'),
  uiShowSideDrawer:  createAction('show side drawer'),
  uiHideProjectModal: createAction('hide project modal'),
  uiShowProjectModal: createAction('show project modal')
}

export const selectors = {
  uiIsShowSideDrawer:   state => state.showSideDrawer,
  uiIsShowProjectModal: state => state.showProjectModal,
  uiProjectStages:      state => state.projectStages
}

export const initialState = {
  showSideDrawer:   false,
  showProjectModal: false,
  projectStages:    ['scoping', 'planning', 'allocating', 'reviewing']
}

export const reducer = createReducer({
  [actions.uiHideSideDrawer]: state => ({ ...state, showSideDrawer: false }),
  [actions.uiShowSideDrawer]: state => ({ ...state, showSideDrawer: true }),
  [actions.uiHideProjectModal]: state => ({ ...state, showProjectModal: false }),
  [actions.uiShowProjectModal]: state => ({ ...state, showProjectModal: true })
}, initialState)

export default {
  actions, initialState, reducer, selectors
}
