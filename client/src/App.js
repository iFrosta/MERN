import React from 'react'
import 'normalize.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'

function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <div className="container">
        <h1>M E R N</h1>
      </div>
    </Router>
  )
}

export default App
