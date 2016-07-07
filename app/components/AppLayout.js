import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'

export default ({children, select, send, ...props}) => {

  const hideSidenav = () => send('ui:hideSidenav')
  const showSidenav = () => send('ui:showSidenav')
  const projects = select('project:all')
  const isShowSidenav = select('ui:showSidenav')//state.ui.showSidenav

  return (
    <div>

      <div className={classnames('sidenav', {active: isShowSidenav})}>
        <a href="#" className="closebtn" onclick={hideSidenav}>X</a>
        {_.map(projects, prj => `<a href="/projects/{prj.slug}">{prj.name}</a>`)}
      </div>

      <div className="wrapper">

        <nav role="banner">
          <div className="nav-item left">
            <a href="#" className="nav-link" onclick={showSidenav}>Projects</a>
            <a href="#" className="nav-link">+</a>
          </div>
          <div className="nav-item">
            <a href="/" className="nav-link">Yaw</a>
          </div>
          <div className="nav-item right">
          </div>
        </nav>

        <div className="content">
          {/*{React.cloneElement(React.Children.only(children), {select, send, ...props})}*/}
        </div>

        <footer>
          <p>Made with ♥ by Dave!</p>
        </footer>
      </div>
    </div>
  )
}
