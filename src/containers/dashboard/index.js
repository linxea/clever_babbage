import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <div>
    <h1>Calendar</h1>
    <Link to="/share">share</Link>
    <Link to="/add-friend-calendar">+</Link>
  </div>
)

export default Dashboard
