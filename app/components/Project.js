import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import _ from 'lodash'

export default ({ children, select, send, params, ...props}) => {

  const stages = ['scoping', 'planning', 'allocating', 'reviewing']

  const project = select('project:bySlug', params.project)
  const stage = params.stage

  return (
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
          {React.cloneElement(React.Children.only(children), {select, send, project, ...props})}
        </main>
      </div>
    </div>
  )
}
