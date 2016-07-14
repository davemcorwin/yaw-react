import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import _ from 'lodash'
import { browserHistory } from 'react-router' //ghetto

import { connect } from '../utils'

const stages = ['scoping', 'planning', 'allocating', 'reviewing']

const Project = ({ children, project, stage }, { router }) =>
  <div className="project-view">

    <div className="project-header">
      <h3 className="title">
        {project.name}
      </h3>
        <select
          className="stage-selector"
          onChange={(e) => browserHistory.push(`/projects/cashup/${e.target.value}`)}>
          { stages.map(stage => <option key={stage} value={stage}>{_.capitalize(stage)}</option>)}
        </select>
        <div className="selector-chevron">&#x25bc;</div>
    </div>

    <div className="project-container">
      {children}
    </div>
      {/*<aside>
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

      </main>
    </div>*/}
  </div>

const mapSelectToProps = (select, ownProps) => ({
  project: select.projectBySlug(ownProps.params.project),
  stage: ownProps.params.stage
})

export default connect(mapSelectToProps)(Project)
