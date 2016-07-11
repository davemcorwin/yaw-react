import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import { select } from '../lib/model'

import SideDrawer from './SideDrawer'

const AppLayout = ({ children, isShowSideDrawer, projects, dispatch }) => {

  const showSideDrawer = e => { e.preventDefault(); dispatch.ui.showSideDrawer(); }
  const hideSideDrawer = dispatch.ui.hideSideDrawer

  return (
    <div style={{height: '100%'}}>

      <SideDrawer {{ hideSideDrawer, isShowSideDrawer, projects }} />

      <div className="wrapper">

        <nav role="banner">
          <div className="nav-item left">
            <Link to="#" className="nav-link" onClick={showSideDrawer}>Projects</Link>
            <Link to="#" className="nav-link">+</Link>
          </div>
          <div className="nav-item">
            <Link to="/" className="nav-link">Yaw</Link>
          </div>
          <div className="nav-item right">
          </div>
        </nav>

        <div className="content">
          {children}
        </div>

        <footer>
          <p>Made with ♥ by Dave!</p>
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isShowSideDrawer: select().ui.showSideDrawer(state),
  projects: select().project.all(state)
})

export default connect(mapStateToProps)(AppLayout)
