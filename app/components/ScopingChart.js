import React from 'react'
import Chart from 'react-chartist'
import _ from 'lodash'

const colors = [
  "#EF9A9A",
  "#B39DDB",
  "#90CAF9",
  "#A5D6A7",
  "#FFF59D",
  "#BCAAA4",
  "#B0BEC5"
]

const ScopingChart = ({ epics, features }) => {

  const data = {
    labels: _.map(epics, 'name'),
    series: _.map(epics, (epic, idx) => ({
      value: _.chain(features).filter({ epic: epic.id }).sumBy('score').value(),
      color: colors[idx],
      name: epic.name
    }))
  }

  const total = _.sumBy(data.series, 'value')

  const options = {
    labelInterpolationFnc: (value, idx) => {
      const pct = (100*data.series[idx].value/total).toPrecision(2)
      return `${value} ${data.series[idx].value} (${pct}%)`
    },
    labelDirection: 'explode'
  }

  return (
    <Chart
      className="ct-chart ct-perfect-fourth"
      data={data}
      options={options}
      type={'Pie'} />
  )
}

export default ScopingChart
