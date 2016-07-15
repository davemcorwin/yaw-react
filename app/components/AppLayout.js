import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import { connect } from '../utils'

import Modal from './Modal'
import SideDrawer from './SideDrawer'
import ProjectForm from './ProjectForm'

const AppLayout = ({ children, isShowSideDrawer, isShowProjectModal, projects, actions }) => {

  const showSideDrawer = e => { e.preventDefault(); actions.uiShowSideDrawer(); }
  const showProjectModal = e => { e.preventDefault(); actions.uiShowProjectModal(); }
  const hideSideDrawer = actions.uiHideSideDrawer

  return (
    <div style={{height: '100%'}}>

      <SideDrawer {...{ hideSideDrawer, isShowSideDrawer, projects }} />

      <div className="wrapper">

        <nav role="banner">
          <div className="nav-item left">
            <Link to="#" className="nav-link" onClick={showSideDrawer}>Projects</Link>
            <Link to="#" className="nav-link" onClick={showProjectModal}>+</Link>
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

      <Modal
        show={isShowProjectModal}
        hideModal={actions.uiHideProjectModal}>

        <ProjectForm hideModal={actions.uiHideProjectModal}/>
      </Modal>
    </div>
  )
}

const mapSelectToProps = select => ({
  isShowSideDrawer: select.uiIsShowSideDrawer(),
  isShowProjectModal: select.uiIsShowProjectModal(),
  projects: select.allProjects()
})

export default connect(mapSelectToProps)(AppLayout)
