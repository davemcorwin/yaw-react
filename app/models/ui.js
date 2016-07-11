import model from '../lib/model'

export default model({
  reducers: {
    hideSideDrawer: state => ({ ...state, showSideDrawer: false }),
    showSideDrawer: state => ({ ...state, showSideDrawer: true })
  },
  selectors: {
    showSideDrawer: state => state.showSideDrawer
  },
  state: {
    showSideDrawer: false
  }
})
