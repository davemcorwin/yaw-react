import React from 'react'
import { Link } from 'react-router'

export default ({ select, send, project, ...props }) => {

  const epicTotal = (state, epic) => _.sumBy(epicFeatures(state, epic), 'score')

  const epics = select('epic:byProject', project.id)
  // const features = select('feature:byEpic', epic.id)
  const addEpic = () => send('epic:add', { project: project.id })

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
