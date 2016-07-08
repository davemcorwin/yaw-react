import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import _ from 'lodash'

export default ({ select, send, ...props}) => {

  const projects = select('project:all')
  const stages = ['scoping', 'planning', 'allocating', 'reviewing']
  const stage = props.params.stage
  const stageProjects = _.filter(projects, { stage })

  return (
    <div className="tab-container">

      <div className="tab-row">

        {_.map(stages, stg =>
          <Link
            key={stg}
            to={`/dashboard/${stg}`}
            className={classnames('tab-link', {'active': stg === stage})}>

            {_.capitalize(stg)} ({_.filter(projects, { stage: stg }).length})
          </Link>
        )}
      </div>

      <div className="tab-content">
        {_.map(stageProjects, projectCard)}
      </div>
    </div>
  )
}

const projectCard = project =>
  <div key={project.slug} className="card project-card">
    <Link to={`/projects/${project.slug}`}>
      <h3>{project.name}</h3>
    </Link>
  </div>
