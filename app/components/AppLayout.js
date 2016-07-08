import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

import SideDrawer from './SideDrawer'

export default ({children, select, send, ...props}) => {

  const showSideDrawer = e => { e.preventDefault(); send('ui:showSideDrawer'); }

  return (
    <div style={{height: '100%'}}>

      <SideDrawer {...{select, send}} />

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
          {React.cloneElement(React.Children.only(children), {select, send, ...props})}
        </div>

        <footer>
          <p>Made with ♥ by Dave!</p>
        </footer>
      </div>
    </div>
  )
}
