import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'

import { select } from '../lib/model'

const stages = ['scoping', 'planning', 'allocating', 'reviewing']

const Dashboard = ({ projects, stage, stageProjects }) =>
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

    <div className="tab-content flex-grid">
      {_.map(stageProjects, project =>
        <Link
          key={project.slug}
          className="card project-card"
          to={`/projects/${project.slug}/${stage}`}>

          <h3>{project.name}</h3>
        </Link>
      )}
    </div>
  </div>

const mapStateToProps = (state, ownProps) => ({
  projects: select().project.all(state),
  stage: ownProps.params.stage,
  stageProjects: select().project.byStage(ownProps.params.stage)
})

export default connect(mapStateToProps)(Dashboard)
