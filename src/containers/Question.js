import React from 'react'
import mobiscroll from '@mobiscroll/react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setPeriodLength,
  setPeriodStartDate,
  updatePeriodProfile
} from '../actions/period'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.onClickButton = this.onClickButton.bind(this)
  }

  render() {
    return (
      <div className="container question">
        <h1>When is your last period?</h1>
        <mobiscroll.Form inputStyle="box" className="container-calendar">
          <mobiscroll.Date
            className="input-calendar"
            display="bubble"
            placeholder="Start Date"
            value={this.props.startDate}
            onSet={this.props.setPeriodStartDate}
          />
        </mobiscroll.Form>
        <h1>How long does your period last?</h1>
        <label>
          <mobiscroll.Numpad
            className="input-period-length"
            ref="numpad"
            theme="ios"
            preset="decimal"
            scale={0}
            max={99}
            min={0}
            value={this.props.periodLength}
            onSet={this.props.setPeriodLength}
          />
          <span className="label-day">Days</span>
        </label>

        <button onClick={this.onClickButton}>Done</button>
      </div>
    )
  }

  onClickButton(event) {
    // send to api
    // redirect to dashboard
    this.props.updatePeriodProfile()
    this.props.history.push('/dashboard')
  }
}

const mapStateToProps = ({ period }) => ({
  periodLength: period.periodLength,
  startDate: period.startDate
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPeriodStartDate,
      setPeriodLength,
      updatePeriodProfile
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)
