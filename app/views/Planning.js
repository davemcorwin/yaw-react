import React    from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { connect } from '../utils'
import { PlanningList } from '../components'

const planningStyles ={
  padding: '10px',
  width: '100%'
}

const addListStyles = {
  float: 'left',
  width: '25rem',
  margin: '5px',
  padding: '10px'
}

class Planning extends React.Component {
  render() {

    const {
      epics,
      features,
      project,
      actions: {
        addProjectPhase,
        assignFeaturePhase,
        deleteFeaturePhase,
        deleteProjectPhase
      }
    } = this.props

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

        <PlanningList
          assignPhase={id => assignFeaturePhase({ id, phase: null })}
          epics={epics}
          features={features.filter(feature => !feature.phase)}
          phase="Unassigned" />


        { project.phases.map(phase =>
            <PlanningList
              assignPhase={id => assignFeaturePhase({ id, phase })}
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
}

const mapSelectToProps = (select, ownProps) => {
  const project = select.projectBySlug(ownProps.params.project)
  return {
    epics: select.epicsForProject(project.id),
    features: select.featuresForProject(project.id),
    project: project
  }
}

export default _.flow(
  connect(mapSelectToProps),
  DragDropContext(HTML5Backend)
)(Planning)
