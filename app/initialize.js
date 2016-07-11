import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'

const load = () => ReactDOM.render(routes, document.getElementById('app'))

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load)
} else {
  load()
}
