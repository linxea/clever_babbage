import React from 'react'

const ShareCalendar = props => (
  <div className="container share-calendar">
    <h1>Send Calendar:</h1>
    <button
      onClick={() => {
        props.history.push('/dashboard')
      }}>
      Send
    </button>
  </div>
)

export default ShareCalendar
