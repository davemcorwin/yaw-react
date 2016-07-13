import { createAction, createReducer } from 'redux-act'

export const actions = {
  uiHideSideDrawer: createAction('hide side drawer'),
  uiShowSideDrawer: createAction('show side drawer')
}

export const selectors = {
  uiIsShowSideDrawer: state => state.showSideDrawer
}

export const initialState = {
  showSideDrawer: false
}

export const reducer = createReducer({
  [actions.uiHideSideDrawer]: state => ({ ...state, showSideDrawer: false }),
  [actions.uiShowSideDrawer]: state => ({ ...state, showSideDrawer: true })
}, initialState)

export default {
  actions, initialState, reducer, selectors
}
