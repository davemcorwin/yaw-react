import React from 'react'
import { DragSource } from 'react-dnd'
import classnames from 'classnames'

const cardSource = {

  beginDrag(props) {
    return {
      id: props.feature.id
    }
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop())
      return

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    // CardActions.moveCardToList(item.id, dropResult.listId);
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

class PlanningCard extends React.Component {
  render() {

    const { feature, epic, isDragging, connectDragSource, text } = this.props

    return connectDragSource(
        <div className={classnames('planning-card', {dragging: isDragging})}>
          <b>{epic.name}:</b>
          <p>{feature.name}</p>
        </div>
      )
  }
}
export default DragSource('card', cardSource, collect)(PlanningCard)
