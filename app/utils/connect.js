import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect as reduxConnect } from 'react-redux'
import { actions, selectors } from '../models'

export default mapSelectToProps => {

  const selectWithState = state => _.mapValues(selectors, selector => (...args) => selector(state, ...args))

  const mapStateToProps = (state, ownProps) => mapSelectToProps(selectWithState(state), ownProps)

  const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

  return reduxConnect(mapStateToProps, mapDispatchToProps)
}
