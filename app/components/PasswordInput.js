import React from 'react'
import passwordMeter from '../../lib/passwordMeter'
import './PasswordInput.scss'

export default class PasswordInput extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      password: '' 
    }
  }

  handleChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    const strength = passwordMeter(this.state.password)
    return <div>
      <input type="password" 
        onChange={this.handleChange} />
      <span className={strength}>{strength}</span>
    </div>
  }

}
