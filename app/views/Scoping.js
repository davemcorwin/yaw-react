import React    from 'react'
import { Link } from 'react-router'

import { connect } from '../utils'
import {
  EpicDetail,
  ScopingChart
} from '../components'

const Scoping = ({
  epics,
  features,
  project,
  selectedEpic,
  selectedFeatures,
  actions: { addEpic, addFeature, updateFeature }
}) =>
  <div className="scoping-view">

    <aside className="epic-list">

      <form
        className="form"
        style={{marginBottom: '0', padding: '0 5px 0 5px'}}
        onSubmit={e => {
          e.preventDefault()
          addEpic({project: project.id, name: e.currentTarget.name.value})
          e.currentTarget.name.value = ''
        }}>

        <input type="text" placeholder="New..." name="name"/>
        <input type="submit" style={{display: 'none'}}/>
      </form>

      <div className="epic-list-container">
        {_.map(epics, epic =>
          <Link
            key={epic.slug}
            to={`/projects/${project.slug}/scoping/${epic.slug}`}
            className="epic-link">

            {epic.name}
          </Link>)}
        </div>
    </aside>

    <main className="epic-container">

      <section className="epic-detail">
        <EpicDetail
          add={() => addFeature({ epic: selectedEpic.id, project: project.id })}
          epic={selectedEpic}
          features={selectedFeatures}
          update={updateFeature} />
      </section>

      <section className="epic-chart">
        <h4>Total {_.sumBy(features, 'score')}</h4>
        <ScopingChart {...{epics, features, project}} />
      </section>
    </main>
  </div>

const mapSelectToProps = (select, ownProps) => {
  const project = select.projectBySlug(ownProps.params.project)
  const selectedEpic = select.epicBySlug(ownProps.params.epic)
  return {
    epics: select.epicsForProject(project.id),
    features: select.featuresForProject(project.id),
    project,
    selectedEpic,
    selectedFeatures: selectedEpic && select.featuresForEpic(selectedEpic.id)
  }
}

export default connect(mapSelectToProps)(Scoping)
