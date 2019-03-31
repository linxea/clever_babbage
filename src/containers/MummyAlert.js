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

class MummyAlert extends React.Component {
  constructor(props) {
    super(props)
    this.showWarningSnackbar = this.showWarningSnackbar.bind(this)
    this.showConfirm = this.showConfirm.bind(this)
    this.showDangerToast = this.showDangerToast.bind(this)
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
      <div className="container mummyAlert">
        <mobiscroll.Form>
            <mobiscroll.FormGroup>
                <mobiscroll.FormGroupTitle>Mummy's alerts</mobiscroll.FormGroupTitle>
                <div className="mbsc-btn-group-block">
                    <mobiscroll.Button onClick={this.showWarningSnackbar}>No cold drinks</mobiscroll.Button>
                    <mobiscroll.Button onClick={this.showConfirm}>BF mode</mobiscroll.Button>
                    <mobiscroll.Button onClick={this.showDangerToast}>Husband mode</mobiscroll.Button>
                            
                </div>
                
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
)(MummyAlert)
