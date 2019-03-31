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

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.onChange1 = this.onChange1.bind(this)
    this.onChange2 = this.onChange2.bind(this)
    
    this.state = {
      switch1: true,
      switch2: false,
    };
  }

  onChange1 = (event) => {
    this.setState({
        switch1: event.target.checked
    });
}

  onChange2 = (event) => {
    this.setState({
        switch2: event.target.checked
    });
  }

  render() {
    return (
      <div className="container question">
        
        <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Proactivity Mode Settings</mobiscroll.FormGroupTitle>
            <mobiscroll.Switch theme="ios" value={this.state.switch1} onChange={this.onChange1}>
                Mummy mode
                <span className="mbsc-desc label-width">This mode turns on Mummy's nagging. Virtual mummy will remind you what you should or should not do to maintain good health.</span>
            </mobiscroll.Switch>
            <mobiscroll.Switch theme="ios" value={this.state.switch2} onChange={this.onChange2}>
                Boyfriend mode
                <span className="mbsc-desc label-width">This mode turns on the sensitive new age guy 'SNAG' and asks after you before/during the period.</span>
            </mobiscroll.Switch>
            <mobiscroll.Switch theme="ios" value={this.state.switch1} onChange={this.onChange1}>
                Husband mode
                <span className="mbsc-desc label-width">This mode puts up the 'DND' signal and informs your partner to be more mindful.</span>
            </mobiscroll.Switch>
        </mobiscroll.FormGroup>
      </div>
    )
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
)(Settings)
