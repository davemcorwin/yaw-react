import model from '../lib/model'

export default model({
  namespace: 'ui',
  state: {
    showSideDrawer: false
  },
  reducers: {
    hideSideDrawer: state => ({ ...state, showSideDrawer: false }),
    showSideDrawer: state => ({ ...state, showSideDrawer: true })
  },
  selectors: {
    showSideDrawer: state => state.showSideDrawer
  }
})
