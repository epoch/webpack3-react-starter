import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <div className="password">
        <h1>Test your password strength</h1>
        <PasswordInput />
      </div>
    </div>
  }
}
