import React              from 'react'
import { Link }           from 'react-router'
import classnames         from 'classnames'
import _                  from 'lodash'
import { browserHistory } from 'react-router'

import { connect } from '../utils'

const Project = ({ children, location, project, stages }) =>
  <div className="project-view">

    <div className="project-header">

      <h3 className="title">
        {project.name}
      </h3>

      <select
        className="stage-selector"
        onChange={e => browserHistory.push(`/projects/cashup/${e.target.value}`)}
        value={_.last(location.pathname.split('/'))}>

        { stages.map(stage =>
            <option key={stage} value={stage}>
              {_.capitalize(stage)}
            </option>
        )}
      </select>

      <div className="selector-chevron">&#x25bc;</div>
    </div>

    <div className="project-container">
      {children}
    </div>
  </div>

const mapSelectToProps = (select, ownProps) => ({
  project: select.projectBySlug(ownProps.params.project),
  stages:  select.uiProjectStages()
})

export default connect(mapSelectToProps)(Project)
