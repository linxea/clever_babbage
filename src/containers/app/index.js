import React from 'react'
import { Route } from 'react-router-dom'
import Question from '../question'
import Dashboard from '../dashboard'
import FriendCalendar from '../friendCalendar'
import Share from '../share'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Question} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/add-friend-calendar" component={FriendCalendar} />
      <Route exact path="/share" component={Share} />
    </main>
  </div>
)

export default App
