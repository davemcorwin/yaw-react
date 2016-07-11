import { connect } from 'react-redux'

import * as models from '../models' // hack for now

export default Component => connect(mapStateToProps)(Component)

const mapStateToProps = state => {
  const selectors = modelsToSelectors(models)
  return {
    select: (type, ...args) => {
      const selector = selectors[type]
      return selector ? selector(state, ...args) : null
    }
  }
}
