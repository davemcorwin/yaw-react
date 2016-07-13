import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import { connect } from '../utils'

import SideDrawer from './SideDrawer'

const AppLayout = ({ children, isShowSideDrawer, projects, actions }) => {

  const showSideDrawer = e => { e.preventDefault(); actions.uiShowSideDrawer(); }
  const hideSideDrawer = actions.uiHideSideDrawer

  return (
    <div style={{height: '100%'}}>

      <SideDrawer {...{ hideSideDrawer, isShowSideDrawer, projects }} />

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

const mapSelectToProps = select => ({
  isShowSideDrawer: select.uiIsShowSideDrawer(),
  projects: select.allProjects()
})

export default connect(mapSelectToProps)(AppLayout)
