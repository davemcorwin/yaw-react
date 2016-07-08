import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import classnames from 'classnames'

export default ({children, select, send, ...props}) => {

  const hideSideDrawer = () => send('ui:hideSideDrawer')
  const projects = select('project:all')
  const isShowSideDrawer = select('ui:showSideDrawer')

  return (
    <div className={classnames('side-drawer', {active: isShowSideDrawer})}>

      <Link to="#" className="closebtn" onClick={hideSideDrawer}>X</Link>

      {_.map(projects, prj =>
        <Link key={prj.slug} to={`/projects/${prj.slug}`}>
          {prj.name}
        </Link>
      )}
    </div>
  )
}
