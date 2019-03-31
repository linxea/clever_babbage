import React from 'react'
import { Route } from 'react-router-dom'
import Question from './Question'
import Dashboard from './Dashboard'
import FriendCalendar from './FriendCalendar'
import ShareCalendar from './ShareCalendar'

const App = () => (
  <div>
    <Route exact path="/" component={Question} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/add-friend-calendar" component={FriendCalendar} />
    <Route exact path="/share-calendar" component={ShareCalendar} />
  </div>
)

export default App
