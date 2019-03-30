import React from 'react'
import { withRouter } from 'react-router-dom'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.onClickButton = this.onClickButton.bind(this)
  }

  render() {
    return (
      <div>
        <h1>When is your last period?</h1>
        <h1>How long is your period?</h1>
        <button onClick={this.onClickButton}>Done</button>
      </div>
    )
  }

  onClickButton(event) {
    // send to api
    // redirect to dashboard
    this.props.history.push('/dashboard')
  }
}

export default withRouter(Question)
