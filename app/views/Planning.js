import React    from 'react'
import { Link } from 'react-router'

import { connect } from '../utils'

const planningStyles ={
  padding: '10px',
  overflow: 'scroll',
  width: '100%'
}

const listStyles = {
  float: 'left',
  borderRadius: '5px',
  backgroundColor: 'grey',
  width: '25rem',
  minHeight: '13rem',
  margin: '5px',
  padding: '10px',
}

const addListStyles = {
  float: 'left',
  width: '25rem',
  margin: '5px',
  padding: '10px'
}

const cardStyles = {
  backgroundColor: 'white',
  height: '6rem',
  borderRadius: '5px',
  margin: '1rem auto',
}

const Card = ({ feature, epic }) =>
  <div style={cardStyles}>
    <b>{epic.name}:</b>
    <p>{feature.name}</p>
</div>

const List = ({ deletePhase, epics, features, phase }) =>
  <div style={listStyles}>

    <h4>{phase}
      <a
        className="u-pull-right"
        href="#"
        onClick={deletePhase}>

        X
      </a>
    </h4>

    { features.map(feature =>
        <Card
          key={feature.name}
          feature={feature}
          epic={_.find(epics, { id: feature.epic })} />
      )}
  </div>

const Planning = ({
  epics,
  features,
  project,
  actions: {
    addProjectPhase,
    assigneFeaturePhase,
    deleteFeaturePhase,
    deleteProjectPhase
  }
}) => {

  const addPhase = e => {
    e.preventDefault()
    const el = e.currentTarget.phase
    if(el.value) {
      addProjectPhase({ id: project.id, phase: el.value })
      el.value = ''
    }
  }

  const deletePhase = (phase, e) => {
    e.preventDefault()
    deleteProjectPhase({ id: project.id, phase })
    features
      .filter(feature => feature.phase === phase)
      .forEach(feature => deleteFeaturePhase({ id: feature.id }))
  }

  return (
    <div className="planning-view" style={planningStyles}>

      <List
        deletePhase={deletePhase.bind(null, "Unassigned")}
        epics={epics}
        features={features.filter(feature => !feature.phase)}
        phase="Unassigned" />


      { project.phases.map(phase =>
          <List
            deletePhase={deletePhase.bind(null, phase)}
            epics={epics}
            features={features.filter(feature => feature.phase === phase)}
            key={phase}
            phase={phase} />
      )}

      <div style={addListStyles}>
        <form className="form" onSubmit={addPhase}>
          <input type="text" name="phase" placeholder="Add..."/>
          <input type="submit" style={{display: 'none'}} />
        </form>
      </div>

    </div>
  )
}

const mapSelectToProps = (select, ownProps) => {
  const project = select.projectBySlug(ownProps.params.project)
  return {
    epics: select.epicsForProject(project.id),
    features: select.featuresForProject(project.id),
    project: project
  }
}

export default connect(mapSelectToProps)(Planning)
