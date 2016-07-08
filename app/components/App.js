import React from 'react'
import { connect } from '../utils'
import AppLayout from './AppLayout'

class App extends React.Component {
  render() {
    return (
      <AppLayout {...this.props}>
        {this.props.children}
      </AppLayout>
    )
  }
}

export default connect(App)
