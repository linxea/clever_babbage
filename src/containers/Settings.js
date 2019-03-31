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
    this.showWarningSnackbar = this.showWarningSnackbar.bind(this)
    this.showConfirm = this.showConfirm.bind(this)
    this.showDangerToast = this.showDangerToast.bind(this)
    
    this.state = {
      mummy: false,
      bf: false,
      husband: false,
    };
  }

  onChange1 = (event) => {
    if (event.target.checked) {
      this.showWarningSnackbar();
    }
    this.setState({
        mummy: event.target.checked
    });
}

  onChange2 = (event) => {
    if (event.target.checked) {
      this.showConfirm();
    }
    this.setState({
        bf: event.target.checked
    });
  }

  onChange3 = (event) => {
    if (event.target.checked) {
      this.showDangerToast();
    }
    this.setState({
        husband: event.target.checked
    });
  }

  showWarningSnackbar = () => {
    mobiscroll.snackbar({
        message: 'Avoid drinking cold drinks',
        color: 'warning'
    });
    this.showWarningSnackbar2();
  }
  
  showWarningSnackbar2 = () => {
    mobiscroll.snackbar({
      message: 'Sleep early starting from tonight',
      color: 'warning'
    });
  }

  showConfirm = () => {
    mobiscroll.confirm({
        title: 'How are you feeling today?',
        message: 'Having any cramps?',
        okText: 'Yes',
        cancelText: 'No',
    });
    this.showConfirm2();
  }
  showConfirm2 = () => {
    mobiscroll.confirm({
        title: 'How are you feeling today?',
        message: 'How bad is it?',
        okText: 'Mild',
        cancelText: 'Severe',
    });
    this.showPrimarySnackbar();
  }

  showPrimarySnackbar = () => {
    mobiscroll.snackbar({
        message: 'Hope you feel better soon.',
        color: 'primary'
    });
  }

  showDangerToast = () => {
    mobiscroll.toast({
        message: 'Hubby is aware not to annoy you for the next few days.',
        color: 'danger'
    });
  }

  render() {
    return (
      <div className="container question">
        <mobiscroll.Form theme="ios-dark">
        <mobiscroll.FormGroup>
            <h1>Proactivity Mode Settings</h1>
            <mobiscroll.Switch theme="ios" value={this.state.mummy} onChange={this.onChange1}>
                Mummy mode
                <span className="mbsc-desc label-width">This mode turns on Mummy's nagging. Virtual mummy will remind you what you should or should not do to maintain good health.</span>
            </mobiscroll.Switch>
            <mobiscroll.Switch theme="ios" value={this.state.bf} onChange={this.onChange2}>
                Boyfriend mode
                <span className="mbsc-desc label-width">This mode turns on the sensitive new age guy 'SNAG' and asks after you before/during the period.</span>
            </mobiscroll.Switch>
            <mobiscroll.Switch theme="ios" value={this.state.husband} onChange={this.onChange3}>
                Husband mode
                <span className="mbsc-desc label-width">This mode puts up the 'DND' signal and informs your partner to be more mindful.</span>
            </mobiscroll.Switch>
        </mobiscroll.FormGroup>
        </mobiscroll.Form>
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
