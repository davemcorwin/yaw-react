import { connect } from 'react-redux'
import { modelsToSelectors } from '../lib/model'

import * as models from '../models' // hack for now

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component)

const selectors = modelsToSelectors(models)

const mapStateToProps = state => ({
  select: (selector, ...args) => selectors[selector](state, ...args)
})

const mapDispatchToProps = dispatch => ({
  send: (type, payload={}) => dispatch({ type, payload })
})
