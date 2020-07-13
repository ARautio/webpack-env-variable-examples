import * as React from 'react'
import { render } from 'react-dom'

interface Props {}

const Example: React.FunctionComponent<Props> = () => (
  <React.Fragment>
    <div>{process.env.ENV_VARIABLE}</div>
    <div>{process.env.NON_ENV_VARIABLE}</div>
  </React.Fragment>
)

render(<Example />, document.getElementById('main'))
