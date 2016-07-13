import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import _ from 'lodash'
import { connect } from '../utils'

const stages = ['scoping', 'planning', 'allocating', 'reviewing']

const Dashboard = ({ projects, stage, stageProjects, actions: { deleteProject } }) =>
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
        <div className="card project-card">
          <div className="actions">
            <div className="u-pull-right">
              <a href="#" className="icon edit-icon"> </a>
              <a href="#" className="icon trash-icon" onClick={(e) => { e.preventDefault(); deleteProject({id: project.id}); }}/>
            </div>
          </div>
          <div className="content">
            <Link
              key={project.slug}
              to={`/projects/${project.slug}/${stage}`}>

              <h3>{project.name}</h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  </div>

Dashboard.displayName = 'Dashboard'

const mapSelectToProps = (select, ownProps) => ({
  projects: select.allProjects(),
  stage: ownProps.params.stage,
  stageProjects: select.projectsForStage(ownProps.params.stage)
})

export default connect(mapSelectToProps)(Dashboard)
