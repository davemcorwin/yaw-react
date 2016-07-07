import { connect } from 'react-redux'
import { modelsToSelectors } from '../lib/model'

import * as models from '../models' // hack for now

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component)

const mapStateToProps = state => {
  const selectors = modelsToSelectors(models)
  return {
    select: (type, ...args) => {
      const selector = selectors[type]
      return selector ? selector(state, ...args) : null
    }
  }
}

const mapDispatchToProps = dispatch => ({
  send: (type, payload={}) => dispatch({ type, payload })
})
