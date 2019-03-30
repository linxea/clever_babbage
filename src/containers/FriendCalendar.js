import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCalendarsOfFriends } from '../actions/period'

const FriendCalendar = props => (
  <div className="container friend-calendar">
    <h1>Add Friend's Period Calendar:</h1>
    <button onClick={e => handleClick(props)}>Add</button>
  </div>
)

const handleClick = props => {
  props.fetchCalendarsOfFriends()
  props.history.push('/dashboard')
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCalendarsOfFriends
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(FriendCalendar)
