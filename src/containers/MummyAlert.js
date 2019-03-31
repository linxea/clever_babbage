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
  }

  showWarningSnackbar = () => {
    mobiscroll.snackbar({
        message: 'Avoid drinking cold drinks',
        color: 'warning'
    });
    mobiscroll.snackbar({
      message: 'Sleep early tonight',
      color: 'warning'
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
