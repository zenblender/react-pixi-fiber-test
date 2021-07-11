import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { ReactPixiFiberStage } from './reactPixiFiberStage'

function initReact() {
  const container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(<ReactPixiFiberStage />, container)
}

initReact()
