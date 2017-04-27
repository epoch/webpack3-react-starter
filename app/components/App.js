import React from 'react'
import PasswordInput from './PasswordInput'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>hello world</h1>
      <label>example password checker:</label>
      <PasswordInput />
    </div>
  }

}

module.exports = App