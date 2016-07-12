import React from 'react'
import { Link } from 'react-router'

import { connect } from '../lib/model'

const Scoping = ({ epics, project, stage, dispatch }) => {

  // const epicTotal = (state, epic) => _.sumBy(epicFeatures(state, epic), 'score')

  // const features = select('feature:byEpic', epic.id)
  const addEpic = dispatch.epic.add({ project: project.id })

  // const projectScore = _.sumBy(epics, epic => epicTotal(state, epic))
  //
  // const labels = epics.map(epic => epic.name)
  // const data = epics.map(epic => epicTotal(state, epic))
  // const selectedEpic = _.first(epics)

  return (
    <div className="scoping-view">
      <section className="epic-list-container">
        <h5>Epics</h5>
        {_.map(epics, epic => <Link key={epic.slug} to={epic.slug}>{epic.name}</Link>)}
        <Link className="add-epic" to="#" onClick={addEpic}>+</Link>
      </section>
      <section className="epic-detail-container">
        {/*{t.epicCard({selectedEpic, project}, state, send)}*/}
      </section>
    </div>
  )
}

const mapSelectToProps = (select, ownProps) => ({
  epics: select.epic.byProject(ownProps.params.project),
  project: select.project.bySlug(ownProps.params.project),
  stage: ownProps.params.stage
})

export default connect(mapSelectToProps)(Scoping)
