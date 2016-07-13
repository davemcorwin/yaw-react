import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import { Link } from 'react-router'

export default ({ hideSideDrawer, isShowSideDrawer, projects }) =>
  <div className={classnames('side-drawer', {active: isShowSideDrawer})}>

    <a href="#" className="closebtn" onClick={hideSideDrawer}>X</a>

    {_.map(projects, prj =>
      <Link key={prj.slug} to={`/projects/${prj.slug}`}>
        {prj.name}
      </Link>
    )}
  </div>
