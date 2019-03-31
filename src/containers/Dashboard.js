import React from 'react'
import { Link } from 'react-router-dom'
import mobiscroll from '@mobiscroll/react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'
import { connect } from 'react-redux'

mobiscroll.settings = {
  theme: 'ios-dark'
}

const Dashboard = props => (
  <div className="container dashboard">
    <h1>Period Calendar</h1>

    <div className="calendar">
      <mobiscroll.Form>
        <mobiscroll.FormGroup>
          <mobiscroll.Calendar
            labels={props.calendar} // More info about labels: https://docs.mobiscroll.com/4-6-1/react/calendar#opt-labels
            display="inline" // Specify display mode like: display="bottom" or omit setting to use default
            type="hidden"
          />
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    </div>
    <div className="row">
      <Link className="button-outline" to="/settings">
        Settings
      </Link>
      <Link className="button-outline" to="/share-calendar">
        Notify
      </Link>
      <Link className="button-outline" to="/add-friend-calendar">
        +
      </Link>
    </div>
  </div>
)

const mapStateToProps = ({ period }) => ({
  calendar: period.calendar
})

export default connect(
  mapStateToProps,
  null
)(Dashboard)
