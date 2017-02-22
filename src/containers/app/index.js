import React from 'react';
import { Link } from 'react-router'

export default ({ children }) => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      {children}
    </main>
  </div>
)