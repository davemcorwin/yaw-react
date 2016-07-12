import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import _ from 'lodash'

import { connect } from '../lib/model'

const stages = ['scoping', 'planning', 'allocating', 'reviewing']

const Project = ({ children, project, stage }) =>
  <div className="project-view">

    <h3 className="project-header">{project.name}</h3>

    <div className="project-container">

      <aside>
        {_.map(stages, stg =>
          <Link
            key={stg}
            to={`/projects/${project.slug}/${stg}`}
            className={classnames({'active': stage === stg})}>

            {_.capitalize(stg)}
          </Link>
        )}
        <div className="filler"> </div>
      </aside>

      <main>
        {children}
      </main>
    </div>
  </div>

const mapSelectToProps = (select, ownProps) => ({
  project: select.project.bySlug(ownProps.params.project),
  stage: ownProps.params.stage
})

export default connect(mapSelectToProps)(Project)
