import React from 'react'
import { DropTarget } from 'react-dnd'
import _ from 'lodash'

import Card from './PlanningCard'

const listStyles = {
  float:           'left',
  borderRadius:    '5px',
  backgroundColor: 'grey',
  width:           '25rem',
  minHeight:       '13rem',
  margin:          '5px',
  padding:         '10px',
}

class PlanningList extends React.Component {
  render() {

    const { connectDropTarget, deletePhase, epics, features, phase } = this.props

    return connectDropTarget(
      <div style={listStyles}>

        { deletePhase ?
          <a
            className="u-pull-right"
            href="#"
            onClick={deletePhase}>

            X
          </a>
          : null}
        <h4>{phase}
          <span
            style={{paddingRight: '10px'}}
            className="u-pull-right">({_.sumBy(features, 'score')})
          </span>
        </h4>

        { features.map(feature =>
            <Card
              key={feature.name}
              feature={feature}
              epic={_.find(epics, { id: feature.epic })} />
          )}
      </div>
    )
  }
}

const spec = {
  drop(props, monitor, component) {
    props.assignPhase(
      monitor.getItem().id
    )
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
})

export default DropTarget('card', spec, collect)(PlanningList)
