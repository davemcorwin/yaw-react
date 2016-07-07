import React from 'react'
import { connect } from '../utils'
import Layout from './AppLayout'

class App extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    )
  }
}

export default connect(App)
