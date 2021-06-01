import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { ReactPixiFiberStage } from './reactPixiFiberStage'

function initReact() {
  ReactDOM.render(<ReactPixiFiberStage />, document.querySelector('.app'))
}

initReact()
