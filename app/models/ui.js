import model from '../lib/model'

export default model({
  namespace: 'ui',
  state: {
    showSidenav: false
  },
  reducers: {
    hideSidenav: state => ({ ...state, showSidenav: false }),
    showSidenav: state => ({ ...state, showSidenav: true })
  }
})
