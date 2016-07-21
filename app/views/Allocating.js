import React    from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

import { connect } from '../utils'

class Allocating extends React.Component {

  generateTimeline(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="allocating">

        <form className="form" onSubmit={this.generateTimeline.bind(this)}>

          <label>Weekly Hours</label>
          <input type="text" name="hours"/>

          <button
            className="button button-primary u-pull-right"
            type="submit">

            Generate
          </button>
        </form>

        <div className="timeline">
          <table>
            <thead>
              <tr></tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>

          <div className="phase-header">
            <div className="phase w-1">
              <h4></h4>
            </div>
            <div className="phase w-2">
              <h4>Phase 1</h4>
            </div>
            <div className="phase w-2">
              <h4>Phase 2</h4>
            </div>
          </div>

          <div className="week-header">
            <div className="week">
              <h5></h5>
            </div>
            <div className="week">
              <h5>Week 1</h5>
            </div>
            <div className="week">
              <h5>Week 2</h5>
            </div>
            <div className="week">
              <h5>Week 3</h5>
            </div>
            <div className="week">
              <h5>Week 4</h5>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature">
              <h6>Feature 1</h6>
            </div>
            <div className="feature">
            </div>
            <div className="feature">
            </div>
            <div className="feature">
            </div>
            <div className="feature">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapSelectToProps = (select, ownProps) => {
  const project = select.projectBySlug(ownProps.params.project)
  return {
    epics: select.epicsForProject(project.id),
    features: select.featuresForProject(project.id),
    project: project
  }
}

export default connect(mapSelectToProps)(Allocating)
