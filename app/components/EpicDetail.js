import React from 'react'
import _ from 'lodash'

const EpicDetail = ({ add, epic, features, update }) =>
  <form className="form">
    <div
      style={{margin: '0 auto', width: '95%'}}
      className="container">
      {_.map(features, feature =>
        <div key={feature.id} className="row">

          <div className="nine columns">
            <input
              onChange={e => update({ ...feature, name: e.currentTarget.value})}
              ref={input => input && !feature.name && input.focus()}
              tabIndex="-1"
              type="text"
              value={feature.name}/>
          </div>

          <div className="three columns">
            <input
              onChange={e => update({ ...feature, score: Number(e.currentTarget.value || 0)})}
              style={{textAlign: 'center'}}
              type="text"
              value={feature.score}/>
          </div>
        </div>
      )}
      <div className="row">
        <div className="nine columns">
        </div>
        <div className="three columns">
          <button
            className="button button-primary"
            style={{marginRight: '6%'}}
            onClick={add}
            type="button">

            +
          </button>
        </div>
      </div>
    </div>
  </form>

export default EpicDetail
